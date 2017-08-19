import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-bottom: 5rem;
  text-align: center;
`;

const Caption = styled.p`
  padding: 1rem 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-family: Lora, serif;

  @media screen and (min-width: 48rem) {
    padding: 2rem 0;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0 auto;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  border: 1px solid #171717;
  background-color: transparent;
`;

function ShowMore(props) {
  return (
    <Wrapper>
      <Caption>
        Showing {props.viewed} of {props.summ}
      </Caption>
      <Button>
        View {props.count} more
      </Button>
    </Wrapper>
  );
}

ShowMore.propTypes = {
  viewed: PropTypes.number.isRequired,
  summ: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default ShowMore;
