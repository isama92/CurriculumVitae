const dotenv = require('dotenv').config({path: '.env.production'});
const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;

const locales = JSON.parse(process.env.REACT_APP_LOCALES);
languages = locales.map(locale => locale.code);

manageTranslations({
    messagesDirectory: path.join(__dirname, "src/i18n/messages"),
    translationsDirectory: path.join(__dirname, "src/i18n/locales/"),
    languages: languages,
});
