import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import triangle from '../../../assets/triangle.svg';

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.1875rem;
  background-color: #fff;

  h2::after {
    content: "";
    display: block;
    width: 0.625rem;
    height: 1.1875rem;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: 48rem) {
    h2::after {
      display: none;
    }
  }
`;

const Heading = styled.h2`
  position: relative;
  margin: 2rem 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;

  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0 1rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 0;
  }
`;

function AccordionHeading(props) {
  return (
    <Button type="button">
      <Heading>
        {props.children}
      </Heading>
    </Button>
  );
}

AccordionHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AccordionHeading;
