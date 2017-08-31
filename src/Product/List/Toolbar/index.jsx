import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filters from './Filters';

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
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

const Link = styled.a`
  margin: 0;
  text-decoration: underline;
  color: #171717;
`;

function CaptionLink(props) {
  return <Link href={props.href}>{props.children}</Link>;
}

CaptionLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const ToolbarWrapper = styled.section`background-color: #f3f3f3;`;

function Toolbar(props) {
  return (
    <ToolbarWrapper>
      <div className="container">
        <Heading>Men&apos;s Clothing</Heading>
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
        <Filters changeState={props.changeState} />
      </div>
    </ToolbarWrapper>
  );
}

Toolbar.propTypes = {
  changeState: PropTypes.func.isRequired,
};

export default Toolbar;
