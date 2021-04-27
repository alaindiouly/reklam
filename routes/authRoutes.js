const passport = require('passport');
//TODO console log req.user everywhere

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/surveys')
  );

  app.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    // TODO check the req.user on client side
    (req, res) => res.redirect('/surveys')
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
