import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import chevron from '../../../assets/arrow.svg';

const DropdownWrap = styled.div`
  margin-right: 1rem;
  @media screen and (min-width: 48rem) {
    position: relative;
    margin-right: 3rem;
    ${props =>
    props.align === 'right' &&
      css`
        margin-right: 0;
        margin-left: auto;
      `};
  }
`;

const Btn = styled.button`
  display: block;
  padding: 1.5rem 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  border: none;
  white-space: nowrap;
  background: transparent;
  outline: 0;
  color: ${props => props.color};
  color: ${props => (props.isOpened ? '#171717' : '#999')};
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${chevron});
    background-size: cover;
    transform: ${props => (props.isOpened ? 'rotate(-180deg)' : 'none')};
  }
`;

const DropdownWindow = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: -.5rem;
  top: 100%;
  display: inline-block;
  width: 100vw;
  padding: 0.5rem;
  padding-top: 1rem;
  background-color: #f3f3f3;
  font-size: 0.75rem;
  line-height: 1rem;
  z-index: 20;

  @media screen and (min-width: 48rem) {
    left: -1.5rem;
    width: 377px;
    padding: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${props =>
    props.align === 'right' &&
      css`
        left: auto;
        right: -1.5rem;
        width: 149px;
      `};
  }
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleClick() {
    function passState() {
      this.props.changeState(this.state.isOpened);
      this.props.changeLocalState(this.state.isOpened);
    }

    this.setState(
      prevState => ({
        isOpened: !prevState.isOpened,
      }),
      passState,
    );
  }

  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ isOpened: false });
    }
    this.props.changeState(this.state.isOpened);
    this.props.changeLocalState(this.state.isOpened);
  }

  render() {
    return (
      <DropdownWrap
        align={this.props.align}
        innerRef={(node) => {
          this.node = node;
        }}
      >
        <Btn
          onClick={() => {
            this.props.handleDropdown();
            this.handleClick();
          }}
          value={this.props.value}
          isOpened={this.state.isOpened}
          color={this.props.color}
        >
          {this.props.value}
        </Btn>
        {this.state.isOpened && (
          <DropdownWindow align={this.props.align}>{this.props.children}</DropdownWindow>
        )}
      </DropdownWrap>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  align: PropTypes.string,
  handleDropdown: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  changeLocalState: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  align: 'left',
};

export default Dropdown;
