import React from 'react';
import styled from 'styled-components';
import FooterNav from './FooterNav';

const Footer = styled.footer`
  padding: 2rem 0;
  background: #f3f3f3;
`;

const Nav = styled.div`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Shipping = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #999999;

  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-right: 1.2rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  }
`;

const Language = Shipping.extend`margin-bottom: 1.5rem;`;

const FooterButton = styled.button`
  display: inline;
  padding: 0;
  border: 0;
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
  font-size: .875rem;
  line-height: 1rem;
  font-style: italic;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Footer>
    <Nav>
      <FooterNav />
    </Nav>

    <div className="container">
      <Shipping>
        Shipping country: <FooterButton type="button">Russian Federation</FooterButton>
      </Shipping>
      <Language>
        Language: <FooterButton type="button">English</FooterButton>
      </Language>

      <Help>Need help?</Help>
      <MoreLink href="/">Find out more and contact us</MoreLink>
    </div>
  </Footer>);
