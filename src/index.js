/* eslint react/jsx-filename-extension: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'flexboxgrid2/dist/flexboxgrid.css';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import Product from './Product';
import ProductList from './ProductList';
import './index.css';

const App = () =>
  (<Router>
    <div className="App">
      <Route exact path="/" component={ProductList} />
      <Route path="/product" component={Product} />
    </div>
  </Router>);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
