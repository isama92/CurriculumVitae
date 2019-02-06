import React from 'react';
import PropTypes from "prop-types";

import classes from './Section.module.css';

const section = props => {
    return <div className={classes.Section}>
        {props.title? <h3 className={classes.Title}>{props.title}</h3> : null}
        {props.children}
    </div>
};

section.propTypes = {
    title: PropTypes.string,
};

export default section;
