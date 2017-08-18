import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Slider from './Slider';
import Info from './Info';
import Color from './Color';
import Sizes from './Sizes';
import Btns from './Buttons';
import { HiddenLg, VisibleLg } from '../../common/Responsive';
import TextBtn from '../../common/TextButton';

const FlexWrapper = styled.div`
  @media screen and (min-width: 62rem) {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const Bold = styled.h4`
  margin: 0;
  margin-bottom: .25rem;
  font-size: .75rem;
  font-weight: 700;
  line-height: 0.875rem;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorWrapper = styled.div`@media screen and (min-width: 62rem) {background-color: #d4bdad;}`;

export default () =>
  (<ColorWrapper>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <HiddenLg>
            <Header />
          </HiddenLg>
        </div>

        <div className="col-xs-12 col-sm-7 col-md-6">
          <Slider />
        </div>

        <div className="col-xs-12 col-sm-5 col-md-6">
          <FlexWrapper>
            <VisibleLg>
              <Header />
            </VisibleLg>
            <Info />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <Color />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <Sizes />
              </div>
            </div>
            <Btns />

            <HiddenLg>
              <TextBtn>NEED SIZE HELP?</TextBtn>
            </HiddenLg>
            <VisibleLg>
              <Bold>Free Next Day Delivery</Bold>
              <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
            </VisibleLg>
          </FlexWrapper>
        </div>
      </div>
    </div>
  </ColorWrapper>);
