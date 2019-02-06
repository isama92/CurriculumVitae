import React from 'react';
import PropTypes from "prop-types";
import FontAwesome from 'react-fontawesome';

import classes from './Subsection.module.css';

const subsection = props => {
    return <div className={classes.Subsection}>
        {props.title? <h4 className={classes.Title}>{props.title}</h4> : null}
        {props.subtitle?
            <h5 className={classes.Subtitle}>
                <span>{props.subtitle}</span>
                {props.subtitle_link?<a href={props.subtitle_link} target="_blank" rel="noopener noreferrer" className={classes.SubtitleIcon}><FontAwesome name="external-link"/></a>:null}
            </h5> : null}
        {props.children}
    </div>
};

subsection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    subtitle_link: PropTypes.string,
};

export default subsection;
