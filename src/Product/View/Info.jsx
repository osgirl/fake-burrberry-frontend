import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import Code from './Code';
import { HiddenLg } from '../../common/Responsive';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 48rem) {
    border-bottom: 0;
  }
`;

const Price = styled.h2`
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
  }

  @media screen and (min-width: 62rem) {
    font-weight: 500;
    margin-bottom: 3rem;
  }
`;

function FormattedPrice(props) {
  return (
    <Price>
      <FormattedNumber
        style="currency" // eslint-disable-line
        currency="RUB"
        maximumFractionDigits={0}
        minimumFractionDigits={0}
        value={props.price}
        currencyDisplay="symbol"
      />
    </Price>
  );
}

FormattedPrice.propTypes = {
  price: PropTypes.element.isRequired,
};

export default () =>
  (<Info>
    <FormattedPrice price={110000} locale="ru" />
    <HiddenLg>
      <Code>Item 39428531</Code>
    </HiddenLg>
  </Info>);
