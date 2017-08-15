import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
addLocaleData([...en, ...ru]);

export default () => {
  return (
    <IntlProvider locale="ru">
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta name="description" content="Welcome to burberry.com" />
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
};
