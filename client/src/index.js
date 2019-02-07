import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from './AppWrapper';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


import * as serviceWorker from './serviceWorker';



ReactDOM.render(<AppWrapper />, document.getElementById('root'));

serviceWorker.unregister();
