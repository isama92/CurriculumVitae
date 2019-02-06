import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import classes from './Element.module.css';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
    skill_great: {
        id: 'sidebar.skill_great',
        defaultMessage: 'Great Level',
    },
    skill_good: {
        id: 'sidebar.skill_good',
        defaultMessage: 'Good Level',
    },
    skill_scholastic: {
        id: 'sidebar.skill_scholastic',
        defaultMessage: 'Scholastic Level',
    },
});

const element = props => {
    const {intl:{formatMessage}} = props;
    const iconClasses = [classes.Icon];
    let iconTitle = '';

    switch(props.icon) {
        default:
            break;
        case 'linux':
            iconClasses.push(classes.Linux);
            iconTitle = 'Tux!';
            break;
        case 'bolt':
            iconClasses.push(classes.Yellow);
            iconTitle = formatMessage(messages.skill_great);
            break;
        case 'check':
            iconClasses.push(classes.Green);
            iconTitle = formatMessage(messages.skill_good);
            break;
        case 'exclamation-circle':
            iconClasses.push(classes.Red);
            iconTitle = formatMessage(messages.skill_scholastic);
            break;
    }

    return (
        <li className={classes.Container}>
            {props.icon? <div className={iconClasses.join(' ')} title={iconTitle}><FontAwesome name={props.icon}/></div> : null}
            {props.link? <a href={props.link} className={classes.Link} target="_blank" rel="noopener noreferrer">{props.text}</a>
                : <div className={classes.Text}>{props.text}</div>}
        </li>
    );
};

element.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    link: PropTypes.string,
};

export default injectIntl(element);
