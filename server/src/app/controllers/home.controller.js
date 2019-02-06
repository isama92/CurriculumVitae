const path = require('path');

module.exports = (() => {
    const home = (req, res) => {
        return res.sendFile(path.join(__dirname, '..', '..', '..', '..', 'client', 'build', 'index.html'));
    };

    const status = (req, res) => {
        return res.send('OK');
    };

    return {
        home,
        status,
    };
})();
