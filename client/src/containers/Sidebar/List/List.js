import React from 'react';
import PropTypes from 'prop-types';

import Element from './Element/Element';

import classes from './List.module.css';

const list = props => {
    const elements = props.elements.map((element, i) => <Element key={i} text={element.text} icon={element.icon} link={element.link}/>);
    return (
        <div className={classes.Container}>
            <h3 className={classes.Title}>{props.title}</h3>
            <ul className={classes.List}>
                {elements}
            </ul>
        </div>
    );
};

list.propTypes = {
    title: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        link: PropTypes.string,
    })),
};

export default list;
