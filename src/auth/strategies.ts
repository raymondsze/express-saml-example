import fs from 'fs';
import { Strategy as SamlStrategy } from 'passport-saml';

const samlStrategy = new SamlStrategy(
  {
    path: '/auth/login/callback',
    entryPoint: process.env.SAML_PROTOCOL_URL,
    logoutUrl: 'https://rszetech.auth0.com/samlp/G-xRAQ4fOgst13vD6Uh74WST7QvS2FtL/logout',
    logoutCallbackUrl: '/test',
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
