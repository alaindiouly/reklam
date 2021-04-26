const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const sendMail = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      // exluding the recipients from search query (potentially thousands of emails)
      recipients: false,
    });
    res.send(surveys);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thank you for your feedback!');
  });
  app.post('/api/surveys/webhooks', (req, res) => {
    const pattern = new Path('/api/surveys/:surveyId/:choice');
    // sendGrid sends out an array of events every now and then (req.body)
    _.chain(req.body)
      .map(({ url, email }) => {
        // 1. extracting the pathname from the user event
        // ex: '/api/surveys/60813426064e3520edd6fe3f/yes'
        // 2. evaluating the pathname against the pattern
        // returns an object with the matched parameters, or null
        const match = pattern.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      // 3. filtering non-match (undefined) out of the events array
      .compact()
      // 4. removing duplicates
      .uniqBy('email', 'surveyId')
      .each(({ email, surveyId, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          // update criteria object
          {
            $inc: { [choice]: 1 },
            // updating $elemMatch in sub document collection
            $set: { 'recipients.$.responded': true },
            // eslint-disable-next-line no-dupe-keys
            $set: { lastResponded: Date.now() },
          }
        ).exec();
      })
      .value();

    res.send({});
  });
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      // mongoose automatically creates a sub-document collection
      // no need to require recipients in index.js
      recipients: recipients
        .split(',')
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    try {
      // control flow downstream
      await sendMail(surveyTemplate(survey), subject, survey.recipients);
      await survey.save();
      //TODO remove credits decrement
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.delete('/api/surveys/:surveyId', async (req, res) => {
    const { surveyId } = req.params;
    try {
      await Survey.findByIdAndDelete(surveyId);
      const surveys = await Survey.find({ _user: req.user.id }).select({
        recipients: false,
      });
      res.status(202).send(surveys);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
