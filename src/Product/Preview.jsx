import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`margin-bottom: 2rem;`;

const Ancor = styled(Link)`
  color: #171717;
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

const More = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

const Fit = styled.p`
  display: block;
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`;

const Like = styled.button`
  display: block;
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  margin-left: .5rem;
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
        <svg
          style={{ overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <title id="like">Like Icon</title>
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

const Name = styled.h3`
  margin: 0 0 .5rem;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 62rem) {
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const Colors = styled.p`
  margin: 0;
  margin-bottom: .5rem;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorsCount = styled.span`
  border-bottom: 1px solid #171717;
  margin-left: 3px;
`;

const Price = styled.h5`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: 400;
`;

function Preview(props) {
  const LikeModule = () =>
    (props.label != null
      ? <div>
        <More>
          <Fit>
            {props.label}
          </Fit>
          <LikeButton />
        </More>
        <Name>
          <Ancor to={`${props.to}`}>
            {props.name}
          </Ancor>
        </Name>
      </div>
      : <More>
        <Name>
          <Ancor to={`${props.to}`}>
            {props.name}
          </Ancor>
        </Name>
        <LikeButton />
      </More>);

  const ColorsModule = () =>
    props.colorsCount > 0 &&
    <Colors>
      Available in&nbsp;
      <ColorsCount>
        <Ancor to={`${props.to}`}>
          {props.colorsCount}&nbsp; colors
        </Ancor>
      </ColorsCount>
    </Colors>;

  return (
    <Wrapper>
      <Ancor to={`${props.to}`}>
        <Img src={props.img} alt={props.alt} />
      </Ancor>
      <LikeModule label={props.label} />
      <ColorsModule colorsCount={props.colorsCount} name={props.name} />
      <Price>
        <FormattedNumber
          style="currency" // eslint-disable-line
          currency="RUB"
          maximumFractionDigits={0}
          minimumFractionDigits={0}
          value={props.price}
          currencyDisplay="symbol"
        />
      </Price>
    </Wrapper>
  );
}

Preview.propTypes = {
  to: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  colorsCount: PropTypes.number,
  price: PropTypes.number.isRequired,
};

Preview.defaultProps = {
  label: null,
  colorsCount: 0,
};

export default Preview;
