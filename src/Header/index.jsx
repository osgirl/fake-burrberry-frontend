import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Header = styled.header`background: #fff;`;

const Logo = styled.img`
  display: block;
  height: 12px;
  margin: 1.125rem auto;

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

export default () =>
  (<Header>
    <a href="/">
      <Logo src={logo} alt="Burberry logo" />
    </a>
  </Header>);
