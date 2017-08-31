import React, { Component } from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import ProductCategory from './Category';
import More from './ShowMore';
import Divider from '../../common/Divider';

const MainWrap = styled.main`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: ${props => (props.covered ? 'block' : 'none')};
  }
`;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      isCovered: false,
    };
    this.changeDropdownState = this.changeDropdownState.bind(this);
  }

  changeDropdownState(value) {
    this.setState({ isCovered: value });
  }

  render() {
    return (
      <div>
        <Toolbar changeState={this.changeDropdownState} />
        <MainWrap covered={this.state.isCovered}>
          <div className="container">
            <ProductCategory heading="Heritage Trench Coats" />
            <Divider />
            <ProductCategory heading="Single Breasted Trench Coats" />
            <More viewed={8} summ={17} count={9} />
          </div>
        </MainWrap>
      </div>
    );
  }
}

export default Main;
