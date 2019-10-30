# Expess with SAML
This is an example app showing how to support passport-saml using express.js.

## Get Started
1. Follow https://auth0.com/docs/protocols/saml/saml-idp-generic to enable SAML (Auth0 is just an example, you could use any idp that support SAML)
2. `cp .env.sample .env`
3. modify `.env` file, fill in the `SAML_PROTOCOL_URL`, `SAML_ISSUER`, `SAML_IDP_CERT_PEM_FILE`.
4. `yarn build`
5. `yarn start`

## Development
`yarn dev`

## Other Feature
1. **typescript** is set up to enable type-check for javascript.
2. **tslint** is set up to perform typescript coding style checking.
3. **prettier** is set up to peform coding style checking.
3. **lint-staged** is set up with **husky** to perform auto linter before git push.
4. **husky** is set up to initialize git hooks.
5. **jest** is set up to perform unit test and corresponding coverage
6. **pino** is set up to convert all log to **json** logging for the ease of some centralized logging system like **ELK**.
7. **tsconfig-paths** is set up to enable module alias using `~/`.
8. **helmet** is enabled to protect common attacks.
9. **cookie/session and body parsers**
11. **dotenv** is enabled to read environment variables from `.env` file.

## Scripts
1. `yarn build`:  Perform the production build
2. `yarn start`: Run the production build
3. `yarn dev`:  Run development, nodemon is enabled to watch source code changes.
4. `yarn test`: Run unit test
5. `yarn test:coverage`: Run unit test coverage
6. `yarn lint`: Run linter
7. `yarn prettier`: Run prettier
