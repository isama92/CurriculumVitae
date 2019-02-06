import React from 'react';
import PropTypes from "prop-types";
import Flag from 'react-world-flags'

import classes from './Flag.module.css';

const flag = props => {
    return <Flag code={props.flag} className={classes.Flag} onClick={() => props.setLocale(props.code)} title={props.title}/>
};

flag.propTypes = {
    code: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setLocale: PropTypes.func.isRequired,
};

export default flag;
