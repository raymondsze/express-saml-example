import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import pinoMiddleware from 'express-pino-logger';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import pino from 'pino';

import { registerRoutes } from '~/auth';

const PORT = parseInt(process.env.PORT || '8080', 10);
const COOKIES_SECRET = process.env.COOKIES_SECRET || '4h1s1sCo0ki3sS3cr3T';

// TODO: connect-sqlite3 have no typescript definition
const connectSqlite = require('connect-sqlite3');
const SQLiteStore = connectSqlite(session);

// serialize / deserialize user from session cookie
passport.serializeUser((user, done) => {
  if (user) return done(null, user);
  return done(null);
});
passport.deserializeUser((user, done) => {
  if (user) return done(null, user);
  return done(new Error());
});

const pinoLogger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();

app.use(pinoMiddleware({ logger: pinoLogger }));
// secure express application via http headers
app.use(helmet());
// enable gzip compression for large size response
app.use(compression());
// session middleware
app.use(
  session({
    store: new SQLiteStore(),
    // secret key for encrypted cookie
    secret: COOKIES_SECRET,
    // set cookie max age
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    // don't resave the session to store if it hasn't changed
    resave: false,
    // reset the cookie Max-Age on every request
    // rolling: true,
    // don't create a session for anonymous users
    saveUninitialized: false,
  }),
);
// enable res.cookie
app.use(cookieParser(COOKIES_SECRET));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// passport initialization
app.use(passport.initialize());
// enable passport integrated with session
app.use(passport.session());

// register auth routes
registerRoutes(app);

app.get('/', (req, res) => {
  if (req.user != null) return res.json(req.user);
  return res.redirect('/auth/login');
});

app.listen(PORT, () => {
  pinoLogger.info(`> Ready on http://localhost:${PORT}`);
});
