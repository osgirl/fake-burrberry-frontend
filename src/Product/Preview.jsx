import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import like from '../assets/like.svg';

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
  margin-bottom: 1rem;
`;

const More = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`;

const Fit = styled.p`
  display: block;
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`;

const Like = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${like});
`;

const Name = styled.h3`
  margin: .5rem 0;
  font-size: .75rem;
  line-height: 1rem
  font-weight: 600;

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

const Colors = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorsCount = styled.span`text-decoration: underline;`;

const Price = styled.h5`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 400;
  color: #999;
`;

function ProductPreviewExtended(props) {
  return (
    <AncorBlock href={props.link}>
      <Img src={props.img} alt={props.alt} />
      <More>
        <Fit>
          {props.fit}
        </Fit>
        <Like />
      </More>
      <Name>
        {props.name}
      </Name>
      <Colors>
        Available in <ColorsCount>{props.colorsCount} colors</ColorsCount>
      </Colors>
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

ProductPreviewExtended.propTypes = {
  link: PropTypes.element.isRequired,
  img: PropTypes.element.isRequired,
  alt: PropTypes.element.isRequired,
  fit: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  colorsCount: PropTypes.element.isRequired,
  price: PropTypes.element.isRequired,
};

export default ProductPreviewExtended;
