import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Filter';

const Wrapper = styled.div`display: flex;`;

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#171717',
    };
    this.onDropdown = this.onDropdown.bind(this);
  }

  onDropdown() {
    this.setState(this.state.color === '#171717' ? { color: '#999' } : { color: '#171717' });
  }

  render() {
    return (
      <Wrapper>
        <Dropdown value="Category" color={this.state.color} action={this.onDropdown}>
          <div>
            Content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content
          </div>
        </Dropdown>
        <Dropdown value="Colour" color={this.state.color} action={this.onDropdown}>
          <div>
            Content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content content content
            content content content content content content content content content
          </div>
        </Dropdown>
        <Dropdown value="Size" color={this.state.color} action={this.onDropdown}>
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
        >
          <div>high or low it’s medium length of content</div>
        </Dropdown>
      </Wrapper>
    );
  }
}

export default Toolbar;
