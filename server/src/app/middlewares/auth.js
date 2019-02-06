const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { auth_secret } = require('../../config/vars');

module.exports = (() => {
    const sessionOptions = {
        genid: req => {
            return uuid();
        },
        store: new FileStore(),
        secret: auth_secret,
        resave: false,
        saveUninitialized: true
    };

    const sessionMW = session(sessionOptions);

    const onlyLoggedIn = (req, res, next) => {
        if(!req.isAuthenticated())
            return res.redirect('/login');
        return next();
    };

    const onlyLoggedOut = (req, res, next) => {
        if(req.isAuthenticated())
            return res.redirect('/');
        return next();
    };

    return {
        session: sessionMW,
        onlyLoggedIn,
        onlyLoggedOut,
    };
})();
