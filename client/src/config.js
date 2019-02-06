export const locales = JSON.parse(process.env.REACT_APP_LOCALES);
export const defaultLocale = locales.find(locale => locale.default === true).code;
