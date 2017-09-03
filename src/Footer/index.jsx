import React from 'react';
import styled from 'styled-components';
import NavLinks from './Nav';

const Footer = styled.footer`
  padding: 2rem 0;
  background: #f3f3f3;
  @media screen and (min-width: 62rem) {
    padding: 4rem 0 3rem;
  }
`;

const Nav = styled.div`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }
`;

const Shipping = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999999;

  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const Language = Shipping.extend`margin-bottom: 1.5rem;`;

const FooterSelect = styled.select`
  display: inline;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
  background: 0;
  color: #171717;
`;

const Help = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const MoreLink = styled.a`
  display: block;
  margin-bottom: 0;
  font-family: Lora, serif;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1rem;
  font-style: italic;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => (
  <Footer>
    <Nav>
      <NavLinks />
    </Nav>

    <div className="container">
      <Shipping>
        Shipping country:
        <FooterSelect type="button">
          <option>Russian Federation</option>
          <option>United Kingdom</option>
          <option>United States</option>
        </FooterSelect>
      </Shipping>
      <Language>
        Language:
        <FooterSelect type="button">
          <option>Russian</option>
          <option>English</option>
          <option>Deutch</option>
        </FooterSelect>
      </Language>

      <Help>Need help?</Help>
      <MoreLink href="/">Find out more and contact us</MoreLink>
    </div>
  </Footer>
);
