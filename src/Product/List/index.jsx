import React from 'react';
import Filters from './Filters';
import ProductCategory from './Category';
import More from './ShowMore';
import Divider from '../../common/Divider';

export default () =>
  (<main>
    <Filters />
    <ProductCategory heading="Heritage Trench Coats" />
    <div className="container">
      <Divider />
    </div>
    <ProductCategory heading="Single Breasted Trench Coats" />
    <More viewed={8} summ={17} count={9} />
  </main>);
