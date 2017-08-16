/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid2/dist/flexboxgrid.css';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Products from './Products';
import './index.css';

ReactDOM.render(<Products />, document.getElementById('root'));
registerServiceWorker();
