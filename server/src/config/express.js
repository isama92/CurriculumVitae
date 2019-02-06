const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const {logs} = require('./vars');
const routes = require('../app/routes');
const authMiddleware = require('../app/middlewares/auth');

const { passport } = require('./passport');

/**
 * Express instance
 * @public
 */

const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(authMiddleware.session);

// enable authentication
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

module.exports = app;
