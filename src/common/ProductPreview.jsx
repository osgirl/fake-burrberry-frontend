import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';

const AncorBlock = styled.a`
  box-sizing: border-box;
  display: block;
  flex-basis: 50%;
  margin-bottom: 2rem;
  color: #171717;
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Name = styled.h3`
  margin: .5rem 0;
  font-family: Lora, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;

  @media screen and (min-width: 48rem) {
    line-height: 1.2;
  }

  @media screen and (min-width: 62rem) {
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: .75rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
`;

const Price = styled.h5`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 400;
  color: #999;
`;

function RecommendationBlock(props) {
  return (
    <AncorBlock href={props.link}>
      <Img src={props.img} alt={props.alt} />
      <Name>
        {props.name}
      </Name>
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
    </AncorBlock>
  );
}

RecommendationBlock.propTypes = {
  link: PropTypes.element.isRequired,
  img: PropTypes.element.isRequired,
  alt: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  price: PropTypes.element.isRequired,
};

export default RecommendationBlock;
