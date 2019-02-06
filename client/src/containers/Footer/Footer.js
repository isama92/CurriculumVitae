import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { injectIntl, defineMessages } from 'react-intl';

import { locales } from '../../config';
import Flag from './Flag/Flag'

import classes from './Footer.module.css';

const messages = defineMessages({
    pdf_download: {
        id: 'footer.pdf_download',
        defaultMessage: 'Scarica PDF',
    },
});

const footer = props => {
    const {intl:{formatMessage}} = props;
    const languages = locales.map(locale => <Flag key={locale.code} code={locale.code} flag={locale.flag} title={locale.name} setLocale={props.setLocale}/>);
    const d = new Date();
    return (
        <footer className={classes.Container}>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={classes.PDF}><FontAwesome name="download"/>&nbsp;{formatMessage(messages.pdf_download)}</a>
            <div className={classes.Languages}>{languages}</div>
            <a href="https://stefano-borzoni.com" target="_blank" rel="noopener noreferrer" className={classes.Copyright}><FontAwesome name="copyright"/>&nbsp;{d.getFullYear()} Stefano Borzoni</a>
        </footer>
    );
};

footer.propTypes = {
    setLocale: PropTypes.func.isRequired,
};

export default injectIntl(footer);
