import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from './Filter';

const Wrapper = styled.div`display: flex;`;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#171717',
      isOpened: false,
    };

    this.onDropdown = this.onDropdown.bind(this);
    this.changeDropdownState = this.changeDropdownState.bind(this);
  }

  onDropdown() {
    this.setState({
      isOpened: this.changeDropdownState,
    });
    this.setState(this.state.isOpened ? { color: '#999' } : { color: '#171717' });
  }

  changeDropdownState(value) {
    this.setState({ isCovered: value });
  }

  render() {
    return (
      <Wrapper>
        <Dropdown
          value="Category"
          color={this.state.color}
          action={this.onDropdown}
          changeState={this.props.changeState}
          changeLocalState={this.changeDropdownState}
        >
          <div>
            Content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content
          </div>
        </Dropdown>
        <Dropdown
          value="Colour"
          color={this.state.color}
          action={this.onDropdown}
          changeState={this.props.changeState}
          changeLocalState={this.changeDropdownState}
        >
          <div>
            Content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content
          </div>
        </Dropdown>
        <Dropdown
          value="Size"
          color={this.state.color}
          action={this.onDropdown}
          changeState={this.props.changeState}
          changeLocalState={this.changeDropdownState}
        >
          <div>
            Content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content
          </div>
        </Dropdown>
        <Dropdown
          align="right"
          value="Sort by price"
          color={this.state.color}
          action={this.onDropdown}
          changeState={this.props.changeState}
          changeLocalState={this.changeDropdownState}
        >
          <div>high or low it’s medium length of content</div>
        </Dropdown>
      </Wrapper>
    );
  }
}

Filters.propTypes = {
  changeState: PropTypes.func.isRequired,
};

export default Filters;
