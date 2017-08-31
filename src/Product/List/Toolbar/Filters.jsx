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
    this.getDropdownState = this.getDropdownState.bind(this);
  }

  onDropdown() {
    this.setState({
      isOpened: this.getDropdownState,
    });
    this.setState(this.state.isOpened ? { color: '#999' } : { color: '#171717' });
  }

  getDropdownState(value) {
    this.setState({ isCovered: value });
  }

  render() {
    return (
      <Wrapper>
        <Dropdown
          value="Category"
          color={this.state.color}
          action={this.onDropdown}
          getState={this.props.getState}
          getLocalState={this.getDropdownState}
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
          getState={this.props.getState}
          getLocalState={this.getDropdownState}
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
          getState={this.props.getState}
          getLocalState={this.getDropdownState}
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
          getState={this.props.getState}
          getLocalState={this.getDropdownState}
        >
          <div>high or low it’s medium length of content</div>
        </Dropdown>
      </Wrapper>
    );
  }
}

Filters.propTypes = {
  getState: PropTypes.func.isRequired,
};

export default Filters;
