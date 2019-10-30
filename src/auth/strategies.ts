import fs from 'fs';
import { Strategy as SamlStrategy } from 'passport-saml';

const samlStrategy = new SamlStrategy(
  {
    path: '/auth/callback',
    entryPoint: process.env.SAML_PROTOCOL_URL,
    passReqToCallback: true,
    issuer: process.env.SAML_ISSUER,
    cert: fs.readFileSync(process.env.SAML_IDP_CERT_PEM_FILE || './secrets/idp_cert.pem', 'utf8'),
  },
  (req, profile, done) => {
    req.log.info('user logon with profile %o', profile);
    done(null, profile);
  },
);

export { samlStrategy };
