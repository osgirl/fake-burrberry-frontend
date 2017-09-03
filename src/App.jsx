import React, { Component } from 'react';

import styled from 'styled-components';

import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import Header from './Header';
import Footer from './Footer';
import Product from './Product/View';
import Products from './Product/List';
import MobileMenu from './Header/MobileMenu';
import MobileMenuStep2 from './Header/MobileMenuStep2';

addLocaleData([...en, ...ru]);

const Page = styled.div`overflow-x: hidden;`;

const Wrapper = styled.div`
  transform: ${props => (props.menuToggled ? 'translateX(274px);' : 'transform: translateX(0);')};
  transition: transform 0.2s ease-in;
  overflow-x: hidden;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobileMenuToggled: false,
      isStepTwoToggled: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleStepTwo = this.toggleStepTwo.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMobileMenuToggled: !prevState.isMobileMenuToggled,
    }));
  }

  toggleStepTwo() {
    this.setState(prevState => ({
      isStepTwoToggled: !prevState.isStepTwoToggled,
    }));
  }

  render() {
    return (
      <IntlProvider locale="ru">
        <Page>
          <Helmet>
            <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
            <meta name="description" content="Welcome to burberry.com" />
          </Helmet>
          <Router>
            <div>
              <MobileMenu
                menuToggled={this.state.isMobileMenuToggled}
                toggleStepTwo={this.toggleStepTwo}
              />
              <MobileMenuStep2
                menuToggled={this.state.isStepTwoToggled}
                toggleStepTwo={this.toggleStepTwo}
              />
              <Wrapper menuToggled={this.state.isMobileMenuToggled}>
                <Header changeState={this.toggleMenu} />
                <div className="App">
                  <Switch>
                    <Route exact path="/:section" component={Products} />
                    <Route exact path="/:section/:category" component={Products} />
                    <Route path="/:section/:category/:id" component={Product} />
                    <Redirect from="/" to="/men/clothes" />
                  </Switch>
                </div>
                <Footer />
              </Wrapper>
            </div>
          </Router>
        </Page>
      </IntlProvider>
    );
  }
}

export default App;
