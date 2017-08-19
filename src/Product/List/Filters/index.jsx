import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';

const Filters = styled.section`background-color: #f3f3f3;`;

const Heading = styled.h1`
  padding: 2rem 0 1rem;
  margin: 0;
  font-family: Lora, serif;
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -.2px;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Caption = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  font-size: .75rem;
  line-height: 1.25rem;
`;

const Link = styled.a`
  margin: 0;
  text-decoration: underline;
  color: #171717;
`;

function CaptionLink(props) {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
}

CaptionLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default () =>
  (<Filters>
    <div className="container">
      <Heading>Men&apos;s clothing</Heading>
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Caption>
            Explore our menswear collection for the season. Sculptural knitwear,{' '}
            <CaptionLink href="/">sweatshirts</CaptionLink>, artist overalls and oversized cabans
            feature alongside our signature trench coat in both heritage...{' '}
            <CaptionLink href="/">More</CaptionLink>
          </Caption>
        </div>
      </div>
      <Toolbar />
    </div>
  </Filters>);
