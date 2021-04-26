const sg = require('@sendgrid/mail');
const keys = require('../config/keys');
sg.setApiKey(keys.sendGridKey);

module.exports = async (htmlContent, subject, recipients) => {
  const msg = {
    from: keys.mailFrom,
    subject,
    html: htmlContent,
    personalizations: recipients.map((recipient) => ({ to: [recipient] })),
  };

  try {
    const result = await sg.send(msg);
    //REMOVE
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};
