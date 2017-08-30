import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Like = styled.button`
  display: block;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  margin-left: 0.5rem;
  border: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
`;

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLiked: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
  }

  render() {
    return (
      <Like onClick={this.handleClick}>
        <svg style={{ overflow: 'visible' }} width={this.props.width} height={this.props.height}>
          <path
            fill={this.state.isLiked ? '#171717' : '#fff'}
            stroke={this.state.isLiked ? '#171717' : '#171717'}
            // eslint-disable-next-line max-len
            d="M7.00147577,14 L1.1995764,7.7486402 C-0.43417144,5.94319333 -0.39228047,3.05447833 1.28335834,1.29416763 C2.85426972,-0.353302646 5.34678245,-0.44357499 7.00147577,1.11362294 C8.67711458,-0.44357499 11.1905728,-0.353302646 12.7614842,1.3393038 L12.7614842,1.3393038 C14.395232,3.0996145 14.4161775,5.96576141 12.8033751,7.7486402 L12.8033751,7.7486402 L7.00147577,14 Z"
            id="path-1"
          />
        </svg>
      </Like>
    );
  }
}

LikeButton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default LikeButton;
