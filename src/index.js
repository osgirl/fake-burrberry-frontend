/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import registerServiceWorker from './registerServiceWorker';
import Product from './Product';
import './index.css';

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
