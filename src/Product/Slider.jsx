import React from "react";
import styled from "styled-components";

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

const SliderImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <Slider>
      <SliderImg src="img/img4@2x.jpg" alt="gabardine coat front img" />
      <SliderImg src="img/img3@2x.jpg" alt="gabardine coat img 2" />
      <SliderImg src="img/img2@2x.jpg" alt="gabardine coat img 3" />
      <SliderImg src="img/img1@2x.jpg" alt="gabardine coat img 4" />
    </Slider>
  );
};
