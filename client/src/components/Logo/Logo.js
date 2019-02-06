import React from 'react';
import classes from './Logo.module.css';

const logo = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.S}>S</div>
            <div className={classes.B}>B</div>
        </div>
    );
};

export default logo;
