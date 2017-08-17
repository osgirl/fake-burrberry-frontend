import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import Helmet from 'react-helmet';
import Header from './Header';
import Product from './Product/View';
import Footer from './Footer';

addLocaleData([...en, ...ru]);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta name="description" content="Welcome to burberry.com" />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>);
