import React from 'react';
import PropTypes from "prop-types";
import Flag from 'react-world-flags'

import classes from './Flag.module.css';

const flag = props => {
    const setLocale = props.setLocale !== undefined
        ? () => props.setLocale(props.locale)
        : () => {};

    return <Flag code={props.flag} className={classes.Flag}
                 onClick={() => setLocale()} title={props.title}/>
};

flag.propTypes = {
    flag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setLocale: PropTypes.func,
    locale: PropTypes.string,
};

export default flag;
