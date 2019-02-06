import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

import Layout from './containers/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';


class App extends React.Component {
    state = {
        sidebar: false,
    };

    constructor(props) {
        super(props);
        this.spinner = document.getElementById('spinner');
    }

    componentDidMount() {
        this.hideSpinner();
    }

    showSpinner = () => {
        if(this.spinner && this.spinner.hasAttribute('hidden'))
            this.spinner.removeAttribute('hidden');
    };

    hideSpinner = () => {
        if(this.spinner && !this.spinner.hasAttribute('hidden'))
            this.spinner.setAttribute('hidden', 'true');
    };

    setSidebar = (state = null) => {
        this.setState(prev => {
            return {
                sidebar: state === null? !prev.sidebar : state,
            };
        });
    };

    render() {
        return (
            <Swipeable
                onSwipedLeft={() => this.setSidebar(false)}
                onSwipedRight={() => this.setSidebar(true)}
            >
                <Layout setSidebar={this.setSidebar}>
                    <Sidebar show={this.state.sidebar} setSidebar={this.setSidebar}/>
                    <Main sidebar={this.state.sidebar} setSidebar={this.setSidebar}/>
                </Layout>
                <Footer setLocale={this.props.setLocale}/>
            </Swipeable>
        );
    }
}

App.propTypes = {
    setLocale: PropTypes.func.isRequired,
};

export default App;
