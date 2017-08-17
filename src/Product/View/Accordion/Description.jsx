import React from 'react';
import styled from 'styled-components';
import Heading from './AccordionHeading';
import { VisibleLg } from '../../../common/Responsive';

const Head = styled.section`
  border-top: 1px solid #c6c6c6;
  margin: 0 -.5rem;
  @media screen and (min-width: 48rem) {
    padding: 0;
    border: 0;
    margin: 0;
  }
`;

const Body = styled.div`
  padding-bottom: 2rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p,
  ul li {
    margin: 0;
    font-family: Lora, serif;
    font-size: .875rem;
    line-height: 1.5rem;
  }

  br {
    line-height: 1.5rem;
  }

  @media screen and (min-width: 48rem) {
    padding-bottom: 1.5rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  .col-lg-4:nth-child(1) img {
    margin-top: 2rem;
  }

  .col-lg-4:nth-child(2) img {
    margin-top: 6rem;
  }
`;

const GalleryImg = styled.img`
  display: block;
  width: 100%;
`;

function Gallery() {
  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-lg-4">
          <GalleryImg src="img/img1@2x.jpg" alt="Long Cotton Gabardine Coat" />
        </div>
        <div className="col-lg-4">
          <GalleryImg src="img/img2@2x.jpg" alt="Long Cotton Gabardine Coat" />
        </div>
        <div className="col-lg-4">
          <GalleryImg src="img/img3@2x.jpg" alt="Long Cotton Gabardine Coat" />
        </div>
      </div>
    </Wrapper>
  );
}

export default () =>
  (<div className="container">
    <div className="row">
      <div className="col-sm-12 col-lg-4">
        <Head>
          <div className="container">
            <Heading>Description</Heading>
          </div>
        </Head>

        <Body>
          <p>A refined car coat crafted in protective cotton gabardine.</p>
          <p>
            Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable
            fabric that protects against wind and rain.
          </p>
          <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
          <p>The piece is finished with a distinctive check undercollar.</p>
          <br />
          <p>
            Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly
            according to size.
          </p>

          <ul>
            <li>Outer: 100% cotton</li>
            <li>Check lining: 100% cotton</li>
            <li>Sleeve lining: 100% viscose</li>
            <li>Buttons: buffalo horn</li>
            <li>Specialist dry clean</li>
            <li>Made in Europe</li>
            <li>Item 39428531</li>
          </ul>
        </Body>
      </div>
      <div className="col-sm-12 col-lg-8">
        <VisibleLg>
          <GalleryImg src="img/img1@2x.jpg" alt="Long Cotton Gabardine Coat" />
        </VisibleLg>
      </div>
      <VisibleLg>
        <Gallery />
      </VisibleLg>
    </div>
  </div>);
