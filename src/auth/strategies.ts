import fs from 'fs';
import { Strategy as SamlStrategy, VerifyWithoutRequest } from 'passport-saml';

const samlStrategy = new SamlStrategy(
  {
    path: '/auth/callback',
    entryPoint: process.env.SAML_PROTOCOL_URL,
    issuer: process.env.SAML_ISSUER,
    cert: fs.readFileSync(process.env.SAML_IDP_CERT_PEM_FILE || './secrets/idp_cert.pem', 'utf8'),
  },
  ((profile, done) => done(null, profile)) as VerifyWithoutRequest,
);

export { samlStrategy };
