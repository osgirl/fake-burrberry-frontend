import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chevron from '../assets/arrow.svg';

const ShopWrap = styled.nav`padding: 1.5rem 0;`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: left;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  background: #fff;
  border: 0;

  &:after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 6px;
    background-image: url(${chevron});
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(-90deg);
  }
`;

function Shop(props) {
  return (
    <ShopWrap>
      <Button onClick={props.toggleStepTwo} type="button">
        Men
      </Button>
      <Button onClick={props.toggleStepTwo} type="button">
        Women
      </Button>
      <Button onClick={props.toggleStepTwo} type="button">
        Children
      </Button>
      <Button onClick={props.toggleStepTwo} type="button">
        Beauty
      </Button>
    </ShopWrap>
  );
}

Shop.propTypes = {
  toggleStepTwo: PropTypes.func.isRequired,
};

export default Shop;
