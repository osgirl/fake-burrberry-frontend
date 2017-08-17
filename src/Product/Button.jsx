import styled from 'styled-components';

export default styled.button`
  display: block;
  height: 3rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: 1px solid;
  border-color: #171717;
  border-radius: 2px;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
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
