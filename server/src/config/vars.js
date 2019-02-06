const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  auth_secret: process.env.AUTH_SECRET,
  auth_token: process.env.AUTH_TOKEN,
  login_username: process.env.LOGIN_USERNAME,
  login_password: process.env.LOGIN_PASSWORD,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
