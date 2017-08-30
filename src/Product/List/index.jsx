import React from 'react';
import Toolbar from './Toolbar';
import ProductCategory from './Category';
import More from './ShowMore';
import Divider from '../../common/Divider';

export default () => (
  <main>
    <Toolbar />
    <div className="container">
      <ProductCategory heading="Heritage Trench Coats" />
      <Divider />
      <ProductCategory heading="Single Breasted Trench Coats" />
      <More viewed={8} summ={17} count={9} />
    </div>
  </main>
);
