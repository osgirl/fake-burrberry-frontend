import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import chevron from '../assets/arrow.svg';
import burger from '../assets/hamburger.svg';

const Wrapper = styled.header`background: #fff;`;

const TopSection = styled.div`
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
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    color: #999;
  }
`;

const ShippingButton = styled.select`
  display: inline-block;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: #999;
  background: transparent;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 13px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${chevron});
    background-size: cover;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  line-height: 0;
`;

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 1.125rem auto;

  @media screen and (min-width: 48rem) {
    height: 1rem;
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
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-decoration: none;
  color: #999;
  &.active {
    border-bottom: 1px solid #171717;
    color: #171717;
  }
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
  outline: 0;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeState();
  }

  render() {
    return <MobileIcon onClick={this.handleClick} />;
  }
}

MobileMenu.propTypes = {
  changeState: PropTypes.func.isRequired,
};

function Header(props) {
  return (
    <Wrapper>
      <div className="container">
        <TopSection>
          <MobileMenu changeState={props.changeState} />
          <Shipping>
            Shopping in:
            <ShippingButton>
              <option>Russian Federation (₽)</option>
              <option>United Kingdom (£)</option>
              <option>United States ($)</option>
            </ShippingButton>
          </Shipping>
          <Link to="/">
            <Logo src={logo} alt="Burberry logo" />
          </Link>
        </TopSection>
      </div>
      <Nav>
        <NavLink to="/women">WOMEN</NavLink>
        <NavLink to="/men">MEN</NavLink>
        <NavLink to="/children">CHILDREN</NavLink>
        <NavLink to="/beauty">BEAUTY</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
      </Nav>
    </Wrapper>
  );
}

Header.propTypes = {
  changeState: PropTypes.func.isRequired,
};

export default Header;
