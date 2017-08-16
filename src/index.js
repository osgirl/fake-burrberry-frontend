/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
