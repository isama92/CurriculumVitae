import React from 'react';
import PropTypes from "prop-types";

import SidebarToggler from './Toggler/Toggler';

import classes from './Header.module.css';

const header = props => {
    return (
        <header className={classes.Container}>
            <SidebarToggler toggleSidebar={props.toggleSidebar} sidebar={props.sidebar}/>
            <h1>
                <span className={classes.Name}>Stefano</span>
                <span className={classes.Surname}>Borzoni</span>
            </h1>
            <h2 className={classes.Title}>Web Developer</h2>
        </header>
    );
};

header.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default header;
