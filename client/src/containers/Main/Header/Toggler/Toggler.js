import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toggler.module.css';

const toggler = props => {
    const togglerClass = [classes.Toggler];
    if(props.sidebar)
        togglerClass.push(classes.Open);
    return (
        <div className={togglerClass.join(' ')} onClick={props.toggleSidebar}>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

toggler.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default toggler;