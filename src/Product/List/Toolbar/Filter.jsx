import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chevron from '../../../assets/arrow.svg';

const DropdownWrap = styled.div`
  position: relative;
  margin-right: 1rem;
  @media screen and (min-width: 48rem) {
    margin-right: 3rem;
    margin-right: ${props => (props.align === 'right' ? '0' : '3rem')};
    margin-left: ${props => (props.align === 'right' ? 'auto' : '0')};
  }
`;

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
  color: ${props => props.color};
  color: ${props => (props.isOpened ? '#171717' : '')};

  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
    background-image: url(${chevron});
    background-size: cover;
    transform: ${props => (props.isOpened ? 'rotate(-180deg)' : 'none')};
  }
`;

const DropdownWindow = styled.div`
  position: absolute;
  left: -.5rem;
  top: 100%;
  display: inline-block;
  width: 377px;
  padding: .5rem;
  padding-top: 1rem;
  background-color: #f3f3f3;
  font-size: .75rem;
  line-height: 1rem;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    left: ${props => (props.align === 'right' ? 'auto' : '-1.5rem')};
    right: ${props => (props.align === 'right' ? '-1.5rem' : 'auto')};
    width: ${props => (props.align === 'right' ? '149px' : '377px')};
  }
`;

function Button(props) {
  return (
    <Btn onClick={props.onClick} isOpened={props.isOpened} color={props.color}>
      {props.value}
    </Btn>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.isOpened) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.parentNode === e.target) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <DropdownWrap
        align={this.props.align}
        ref={(node) => {
          this.node = node;
        }}
      >
        <Button
          onClick={() => {
            this.handleClick();
            this.props.action();
          }}
          value={this.props.value}
          isOpened={this.state.isOpened}
          color={this.props.color}
        />
        {this.state.isOpened &&
          <DropdownWindow align={this.props.align}>
            {this.props.children}
          </DropdownWindow>}
      </DropdownWrap>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  align: PropTypes.string,
  action: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  align: 'left',
};

export default Dropdown;
