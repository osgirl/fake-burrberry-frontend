import React from "react";
import styled from "styled-components";
import FooterNav from "./FooterNav";

const Footer = styled.footer`
  padding: 2rem .5rem;
  background: #f3f3f3;

  @media screen and (min-width: 48rem) {
    padding: 2rem 0;
  }
`;

const Nav = styled.div`
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 1rem;
  }
`;

const ShippingButton = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background: none;
  color: #999999;

  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-right: 1.2rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  }
`;

const LangButton = styled.button`
  display: block;
  margin-bottom: 1.5rem;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background: none;
  color: #999999;

  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-right: 1.2rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  }
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

const MoreAncor = styled.a`
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

export default () => {
  return (
    <Footer>
      <Nav>
        <FooterNav />
      </Nav>

      <div className="container">
        <ShippingButton type="button">Shipping country: Russian Federation</ShippingButton>
        <LangButton type="button">Language: English</LangButton>

        <Help>Need help?</Help>
        <MoreAncor href="/">Find out more and contact us</MoreAncor>
      </div>
    </Footer>
  );
};
