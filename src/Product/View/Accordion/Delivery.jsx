import React from 'react';
import styled from 'styled-components';
import Heading from './AccordionHeading';
import { HiddenMd, VisibleMd } from '../../../common/Responsive';

const Head = styled.section`
  border-top: 1px solid #c6c6c6;
  margin: 0 -.5rem;
  padding: 0 .5rem;
  @media screen and (min-width: 25rem) {
    border: 0;
    margin: 0;
    padding: 0;
  }
`;
const Body = styled.div`padding-bottom: 2rem;`;

const DeliveryImg = styled.img`
  display: none;
  margin-top: 1rem;
  @media screen and (min-width: 48rem) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 0;
  }
`;

const BodyHeading = styled.h2`
  height: 1.1875rem;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1875rem;
`;

const Wrapper = styled.div`
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

export default () =>
  (<Body>
    <div className="container">
      <HiddenMd>
        <Head>
          <Heading>Delivery</Heading>
        </Head>
      </HiddenMd>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <DeliveryImg src="/img/delivery@2x.jpg" alt="delivery image" />
        </div>

        <div className="col-xs-12 col-md-5 col-lg-4 col-lg-offset-1">
          <Wrapper>
            <VisibleMd>
              <BodyHeading>DELIVERY</BodyHeading>
            </VisibleMd>

            <Bold>Free Next Day Delivery</Bold>
            <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>

            <Bold>Collect-in-Store</Bold>
            <Text>Order online today and pick up your items in store as early as tomorrow</Text>

            <Bold>Free Returns</Bold>
            <Text>Enjoy free returns on your order</Text>

            <Bold>Free Gift Packaging</Bold>
            <Text>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Text>
          </Wrapper>
        </div>
      </div>
    </div>
  </Body>);
