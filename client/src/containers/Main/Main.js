import React from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';

import Header from './Header/Header';
import Content from './Content/Content';

import classes from './Main.module.css';

class Main extends React.Component {
    toggleSidebar = e => {
        e.stopPropagation();
        this.props.setSidebar();
    };

    render() {
        return (
            <div className={classes.Container}>
                <Scrollbars
                    autoHide
                    autoHideTimeout={300}
                >
                    <Header toggleSidebar={this.toggleSidebar} sidebar={this.props.sidebar}/>
                    <Content/>
                </Scrollbars>
            </div>
        );
    }
}

Main.propTypes = {
    sidebar: PropTypes.bool.isRequired,
    setSidebar: PropTypes.func.isRequired,
};

export default Main;
