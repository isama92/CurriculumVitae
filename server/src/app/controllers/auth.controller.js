const path = require('path');
const { passport } = require('../../config/passport');

module.exports = (() => {
    const form = (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'templates', 'form.html'));
    };

    const login = (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if(info || err || !user)
                return res.redirect('/login?login-error');
            req.login(user, (err) => {
                if (err || !user)
                    return res.redirect('/login?login-error');
                return res.redirect('/');
            })
        })(req, res, next);
    };

    const token = (req, res, next) => {
        passport.authenticate('token', (err, user, info) => {
            if(info || err || !user)
                return res.redirect('/login?token-error');
            req.login(user, (err) => {
                if (err || !user)
                    return res.redirect('/login?token-error');
                return res.redirect('/');
            })
        })(req, res, next);
    };

    const logout = (req, res) => {
        req.session.destroy(err => {
            if(err)
                console.error(err);
            return res.redirect('/login');
        });
    };

    return {
        form,
        login,
        logout,
        token,
    };
})();
