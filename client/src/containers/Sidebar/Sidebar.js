import React from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';
import { injectIntl, defineMessages } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import CSSTransition from 'react-transition-group/CSSTransition';

import Logo from '../../components/Logo/Logo';
import List from './List/List';

import classes from './Sidebar.module.css';

const messages = defineMessages({
    section: {
        id: 'sidebar.section',
        defaultMessage: 'section',
    },
    translation: {
        id: 'sidebar.translation',
        defaultMessage: 'translation',
    },
});

class Sidebar extends React.Component {
    state = {
        toBottom: true,
    };

    constructor(props) {
        super(props);
        this.scrollbar = null;
    }

    onScrollStop = () => {
        const s = this.scrollbar.getValues();
        this.setState({
            toBottom: s.top !== 1,
        });
    };

    scrollToBottom = () => {
        this.scrollbar.scrollToBottom();
    };

    render() {
        const {intl:{formatMessage}} = this.props;
        const sidebar_skills = [
            {
                title: formatMessage(messages.section),
                elements: [
                    // if you use bolt, check, exclamation-circle or linux as icon
                    // you get a text on mouse hover (check out Sidebar/List/Element component)
                    {text: 'Skill 1', icon: 'bolt'},
                    {text: 'Skill 2', icon: 'check'},
                    {text: 'Skill 3', icon: 'exclamation-circle'},
                    {text: 'Skill with (' + formatMessage(messages.translation) + ')', icon: 'linux'},
                    {
                        text: 'Skill with link',
                        icon: 'github',
                        link: 'https://github.com/isama92',
                    },
                ],
            },
        ];

        const lists = sidebar_skills.map((list, i) => <List key={i} title={list.title} elements={list.elements}/>);
        const cl = [classes.Container];
        if(this.props.show)
            cl.push(classes.Show);
        return (
            <div className={cl.join(' ')} onClick={e => e.stopPropagation()}>
                <Scrollbars
                    autoHide
                    autoHideTimeout={300}
                    ref={ref => {this.scrollbar = ref;}}
                    onScrollStop={this.onScrollStop}
                >
                    <div className={classes.Logo}><Logo/></div>
                    {lists}
                </Scrollbars>
                <CSSTransition
                    in={this.state.toBottom}
                    timeout={200}
                    classNames={{
                        enter: classes.ScrollDownEnter,
                        enterActive: classes.ScrollDownEnterActive,
                        exit: classes.ScrollDownExit,
                        exitActive: classes.ScrollDownExitActive,
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={classes.ScrollDown}><FontAwesome name="angle-double-down" size="2x" onClick={this.scrollToBottom}/></div>
                </CSSTransition>
            </div>
        );
    }
}

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    setSidebar: PropTypes.func.isRequired,
};

export default injectIntl(Sidebar);
