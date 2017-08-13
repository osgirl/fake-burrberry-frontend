import React from "react";
import styled from "styled-components";
import { HiddenLg, VisibleLg } from "../common/Hidden";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 0;
  }

  @media screen and (min-width: 62rem) {
    flex-direction: row;
  }
`;

const SimpleButton = styled.button`
  height: 3rem;
  display: block;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid;
  border-color: #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
  background-color: transparent;

  ${props =>
    props.primary &&
    `
    background-color: #171717;
    color: #fff;
    @media screen and (min-width: 62rem) {
      margin-right: 1rem;
    }
  `};

  @media screen and (min-width: 62rem) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;

export default () => {
  return (
    <Buttons>
      <HiddenLg>
        <SimpleButton primary type="button">
          select size
        </SimpleButton>
      </HiddenLg>

      <VisibleLg>
        <SimpleButton primary type="button">
          Add to cart
        </SimpleButton>
      </VisibleLg>

      <SimpleButton type="button">find in store</SimpleButton>
    </Buttons>
  );
};
