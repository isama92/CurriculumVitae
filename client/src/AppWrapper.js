import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';

import translations from "./i18n/locales"
import { defaultLocale } from './config';
import App from './App';

addLocaleData(itLocaleData);
addLocaleData(enLocaleData);

class AppWrapper extends React.Component {
    state = {
        locale: defaultLocale,
    };

    setLocale = locale => {
        this.setState({locale: locale});
    };

    render() {
        const messages = translations[this.state.locale];
        return (

            <IntlProvider locale={this.state.locale} key={this.state.locale} messages={messages}>
                <App setLocale={this.setLocale}/>
            </IntlProvider>
        );
    }
}

export default AppWrapper;
