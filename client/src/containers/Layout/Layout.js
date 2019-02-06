import React from 'react';
import PropTypes from "prop-types";

import classes from './Layout.module.css';

const layout = props => {
    return (
        <div className={classes.Container} onClick={() => props.setSidebar(false)}>{props.children}</div>
    );
};

layout.propTypes = {
    setSidebar: PropTypes.func,
};

export default layout;
