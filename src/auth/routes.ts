import { Express } from 'express';
import passport from 'passport';

import { samlStrategy } from './strategies';

export function registerRoutes(app: Express) {
  passport.use('saml', samlStrategy);

  app.get('/auth/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), (req, res) => {
    res.redirect('/');
  });

  app.post('/auth/logout/callback', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/logout', (req, res) => {
    samlStrategy.logout(req, (err, requestUrl) => {
      req.logout();
      res.redirect(requestUrl || '/');
    });
  });

  app.post('/auth/login/callback', passport.authenticate('saml', { session: true }), (req, res) => {
    res.redirect('/');
  });
}
