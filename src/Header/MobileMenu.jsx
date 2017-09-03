import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import Shop from './Shop';

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.menuToggled ? '0' : '-274px')};
  width: 274px;
  height: 100vh;
  background: #fff;
  z-index: 100;
  overflow-y: auto;
  transition: left 0.2s ease-in;
`;

const Img = styled.img`
  display: block;
  height: 0.75rem;
  padding: 1.125rem 0;
  margin: 0 auto;
`;

function Logo() {
  return (
    <div>
      <a href="/">
        <Img src={logo} alt="Burberry" />
      </a>
    </div>
  );
}

const NavWrap = styled.div`
  margin-bottom: 28px;
  nav {
    padding-bottom: 1.5rem;
  }
`;

const NavHeading = styled.h5`
  margin: 0;
  margin-bottom: 1.125rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.875rem;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1rem;
  text-transform: capitalize;
  text-decoration: none;
  color: #171717;
`;

function Navigation() {
  return (
    <NavWrap>
      <nav>
        <NavHeading>Customer service</NavHeading>
        <Link href="/">Contact Us</Link>
        <Link href="/">Payment</Link>
        <Link href="/">Shipping</Link>
        <Link href="/">Returns</Link>
        <Link href="/">Faqs</Link>
        <Link href="/">Live Chat</Link>
        <Link href="/">The Burberry App</Link>
        <Link href="/">Store Location</Link>
      </nav>
      <nav>
        <NavHeading>Our Company</NavHeading>
        <Link href="/">Our History</Link>
        <Link href="/">Burberry Group Plc</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Corporate Responsibility</Link>
        <Link href="/">Site Map</Link>
      </nav>
    </NavWrap>
  );
}

const LocaleSelect = styled.select`
  display: block;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  border: 1px solid #171717;
  border-radius: 2px;
`;

function Locale() {
  return (
    <div>
      <LocaleSelect>
        <option>Russian Federation</option>
        <option>United Kingdom</option>
        <option>United States</option>
      </LocaleSelect>

      <LocaleSelect>
        <option>Russian</option>
        <option>English</option>
        <option>Deutch</option>
      </LocaleSelect>
    </div>
  );
}

function Menu(props) {
  // componentDidMount() {
  //   document.addEventListener('click', this.handleOutsideClick, true);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleOutsideClick, true);
  // }

  return (
    <Wrap menuToggled={props.menuToggled}>
      <div className="container">
        <Logo />
        <Shop toggleStepTwo={props.toggleStepTwo} />
        <Navigation />
        <Locale />
      </div>
    </Wrap>
  );
}

Menu.propTypes = {
  menuToggled: PropTypes.bool.isRequired,
  toggleStepTwo: PropTypes.func.isRequired,
};

export default Menu;
