import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chevron from '../../../assets/arrow.svg';

const Wrapper = styled.div`display: flex;`;

const Btn = styled.button`
  display: block;
  padding: 1.5rem 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  border: none;
  white-space: nowrap;
  background: transparent;
  outline: 0;

  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background-image: url(${chevron});
    background-size: cover;
  }
`;

function Button(props) {
  return (
    <Btn onClick={props.onClick}>
      {props.value}
    </Btn>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const DropdownWrap = styled.div`
  position: relative;
  margin-right: 1rem;
  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    &:last-child {
      margin: 0;
      margin-left: auto;
    }
  }
`;

// const DropdownWindow = styled.div`
//   position: absolute;
//   left: -1.5rem;
//   top: 100%;
//   display: inline-block;
//   width: 377px;
//   padding: 1.5rem;
//   padding-top: 1rem;
//   background-color: #f3f3f3;
// `;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpened: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <DropdownWrap>
        <Button onClick={this.handleClick} value={this.props.value} />
        {this.state.isOpened &&
          <div>
            {this.props.children}
          </div>}
      </DropdownWrap>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

function Toolbar() {
  return (
    <Wrapper>
      <Dropdown value="Category">
        <div>CONTENT1</div>
      </Dropdown>
      <Dropdown value="Colour">
        <div>CONTENT2</div>
      </Dropdown>
      <Dropdown value="Size">
        <div>CONTENT3</div>
      </Dropdown>
      <Dropdown value="Sort by price">
        <div>CONTENT4</div>
      </Dropdown>
    </Wrapper>
  );
}

export default Toolbar;
