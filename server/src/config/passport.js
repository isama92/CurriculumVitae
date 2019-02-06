const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TokenStrategy = require('passport-unique-token').Strategy;
const { login_username, login_password, auth_token } = require('./vars');

const localOptions = {usernameField: 'username'};

const localAuth = (username, password, done) => {
    if (username === login_username && password === login_password)
        return done(null, login_username);
    return done(null, false, 'Errore');
};

const tokenOptions = {
    tokenQuery: 'token',
    tokenParams: 'token',
    tokenField: 'token',
    tokenHeader: 'token',
    failedOnMissing: true,
};

const tokenAuth = (token, done) => {
    if (token === auth_token) {
        return done(null, token);
    }
    return done(null, false, 'Errore');
};

const serialize = (user, done) => {
    done(null, user);
};

const deserialize = (data, done) => {
    const user = data === login_username || data === auth_token? data : false;
    done(null, user);
};

passport.use('token', new TokenStrategy(tokenOptions, tokenAuth));
passport.use('local', new LocalStrategy(localOptions, localAuth));
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

exports.passport = passport;
