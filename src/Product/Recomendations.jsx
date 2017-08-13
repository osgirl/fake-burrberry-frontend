import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Recommendations = styled.section`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }
`;

const Heading = styled.h2`
  display: block;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  text-transform: uppercase;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.1875rem;
  }

  @media screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const BlocksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  @media screen and (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

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
        <FormattedNumber style="currency" currency="RUB" maximumFractionDigits={0} minimumFractionDigits={0} value={props.price} currencyDisplay="symbol" />
      </Price>
    </AncorBlock>
  );
}

export default () => {
  return (
    <Recommendations>
      <div className="container">
        <Heading>we recommend</Heading>
      </div>

      <BlocksWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-3">
              <RecommendationBlock link="/" img="img/wr1.jpg" alt="Emroided Hooded" name="Emroided Hooded Content For Three Lines" price={27000} locale="ru" />
            </div>

            <div className="col-xs-6 col-sm-3">
              <RecommendationBlock link="/" img="img/wr2.jpg" alt="Relaxed Fit Stretch Jeans" name="Relaxed Fit Stretch Jeans Content For Three Lines" price={22500} locale="ru" />
            </div>

            <div className="col-xs-6 col-sm-3">
              <RecommendationBlock link="/" img="img/wr3.jpg" alt="Leather and House" name="Leather and House Check Content For Three Lines" price={120000} locale="ru" />
            </div>

            <div className="col-xs-6 col-sm-3">
              <RecommendationBlock link="/" img="img/wr4.jpg" alt="Leather Wingtip" name="Leather Wingtip Check Content For Three Lines" price={46000} locale="ru" />
            </div>
          </div>
        </div>
      </BlocksWrapper>
    </Recommendations>
  );
};
