import { Express } from 'express';
import passport from 'passport';

import { samlStrategy } from './strategies';

export function registerRoutes(app: Express) {
  passport.use('saml', samlStrategy);

  app.get("/auth/login", passport.authenticate("saml",  { failureRedirect: '/', failureFlash: true }), (req, res) => {
    res.redirect('/');
  });
  
  app.post('/auth/callback', passport.authenticate('saml', { session: true }), (req, res) => {
    res.redirect('/');
  });
}
