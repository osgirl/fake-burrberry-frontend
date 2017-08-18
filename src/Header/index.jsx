import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import chevron from '../assets/arrow.svg';
import burger from '../assets/hamburger.svg';

const Wrapper = styled.header`background: #fff;`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shipping = styled.p`
  display: none;

  @media screen and (min-width: 48rem) {
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    margin-top: -8px;
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: .75rem;
    line-height: 1rem;
    font-weight: 600;
    color: #999;
  }
`;

const ShippingButton = styled.button`
  display: inline-block;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #999;
  background: transparent;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 13px;
    height: 6px;
    margin-left: .5rem;
    background-image: url(${chevron});
    background-size: cover;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  line-height: 0;
`;

const Logo = styled.img`
  display: inline-block;
  height: 12px;
  margin: 1.125rem 0;

  @media screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    height: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;

const NavLink = Link.extend`
  padding: 1rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-decoration: none;
  color: #999;

  ${props =>
    props.active &&
    `
    border-bottom: 1px solid #171717;
    color: #171717;
  `};
`;

const MobileIcon = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  width: 25px;
  height: 20px;
  padding: 0;
  margin-top: -10px;
  border: 0;
  background-color: transparent;
  background-image: url(${burger});
  background-repeat: no-repeat;
  background-position: left center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Header>
        <MobileIcon />
        <Shipping>
          Shopping in: <ShippingButton>United Kingdom (£)</ShippingButton>
        </Shipping>
        <Link to="/">
          <Logo src={logo} alt="Burberry logo" />
        </Link>
      </Header>
    </div>
    <Nav>
      <NavLink to="/">WOMEN</NavLink>
      <NavLink active to="/">
        MEN
      </NavLink>
      <NavLink to="/">CHILDREN</NavLink>
      <NavLink to="/">BEAUTY</NavLink>
      <NavLink to="/">EXPERIENCE</NavLink>
    </Nav>
  </Wrapper>);
