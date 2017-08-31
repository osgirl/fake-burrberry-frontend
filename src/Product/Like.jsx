import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Svg from './LikeIcon';

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
  svg {
    overflow: visible;
  }
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
        <Svg width={this.props.width} height={this.props.height} isLiked={this.state.isLiked} />
      </Like>
    );
  }
}

LikeButton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default LikeButton;
