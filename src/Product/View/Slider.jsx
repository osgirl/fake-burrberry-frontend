import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slider = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }

  @media screen and (min-width: 62rem) {
    overflow-x: hidden;
  }
`;

const Picture = styled.picture``;

const Img = styled.img`
  min-height: 25rem;
  vertical-align: top;
  @media only screen and (min-width: 48rem) {
    min-height: 36rem;
  }
  @media only screen and (min-width: 62rem) {
    min-height: 40.75rem;
  }
`;

function SliderImg(props) {
  return (
    <Picture>
      <source media="(min-width: 48rem)" srcSet={props.srcset} />
      <source media="(min-width: 62rem)" srcSet={props.srcset} />
      <Img src={props.src} alt={props.alt} />
    </Picture>
  );
}

SliderImg.propTypes = {
  srcset: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default () =>
  (<Slider>
    <SliderImg
      src="img/img4.jpg"
      srcset="img/img4.jpg 1x, img/img4@2x.jpg 2x, img/img4@3x.jpg 3x"
      alt="gabardine coat front img"
    />
    <SliderImg
      src="img/img3.jpg"
      srcset="img/img3.jpg 1x, img/img3@2x.jpg 2x, img/img3@3x.jpg 3x"
      alt="gabardine coat img 2"
    />
    <SliderImg
      src="img/img2.jpg"
      srcset="img/img2.jpg 1x, img/img2@2x.jpg 2x, img/img2@3x.jpg 3x"
      alt="gabardine coat img 3"
    />
    <SliderImg
      src="img/img1.jpg"
      srcset="img/img1.jpg 1x, img/img1@2x.jpg 2x, img/img1@3x.jpg 3x"
      alt="gabardine coat img 4"
    />
  </Slider>);
