import React from 'react';
import styled from 'styled-components';
import RecommendationBlock from '../Preview';

const Recommendations = styled.section`@media screen and (min-width: 48rem) {border-bottom: 0;}`;

const Heading = styled.h2`
  display: block;
  margin-top: 3rem;
  margin-bottom: 1rem;
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

export default () =>
  (<Recommendations>
    <div className="container">
      <Heading>we recommend</Heading>
    </div>

    <BlocksWrapper>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <RecommendationBlock
              link="/"
              img="img/wr1.jpg"
              alt="Emroided Hooded"
              name="Emroided Hooded Content For Three Lines"
              price={27000}
              locale="ru"
            />
          </div>

          <div className="col-xs-6 col-sm-3">
            <RecommendationBlock
              link="/"
              img="img/wr2.jpg"
              alt="Relaxed Fit Stretch Jeans"
              name="Relaxed Fit Stretch Jeans Content For Three Lines"
              price={22500}
              locale="ru"
            />
          </div>

          <div className="col-xs-6 col-sm-3">
            <RecommendationBlock
              link="/"
              img="img/wr3.jpg"
              alt="Leather and House"
              name="Leather and House Check Content For Three Lines"
              price={120000}
              locale="ru"
            />
          </div>

          <div className="col-xs-6 col-sm-3">
            <RecommendationBlock
              link="/"
              img="img/wr4.jpg"
              alt="Leather Wingtip"
              name="Leather Wingtip Check Content For Three Lines"
              price={46000}
              locale="ru"
            />
          </div>
        </div>
      </div>
    </BlocksWrapper>
  </Recommendations>);
