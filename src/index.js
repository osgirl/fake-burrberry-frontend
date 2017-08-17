/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid2/dist/flexboxgrid.css';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import ProductList from './ProductList';
import './index.css';

ReactDOM.render(<ProductList />, document.getElementById('root'));
registerServiceWorker();
