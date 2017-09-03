import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chevron from '../assets/arrow.svg';

const category = [
  {
    name: 'New Arrivals',
    link: '/men/new_arrivals',
  },
  {
    name: 'Clothing',
    link: '/men/clothing',
  },
  {
    name: 'Scarves',
    link: '/men/scarves',
  },
  {
    name: 'Accesories',
    link: '/men/accessories',
  },
  {
    name: 'Shoes',
    link: '/men/shoes',
  },
  {
    name: 'Fragnants',
    link: '/men/fragnants',
  },
  {
    name: 'Gifts',
    link: '/men/gifts',
  },
  {
    name: 'Runway',
    link: '/men/runway',
  },
];

const Wrap = styled.section`
  position: fixed;
  top: 0;
  left: ${props => (props.menuToggled ? '0' : '-274px')};
  width: 274px;
  height: 100vh;
  background: #fff;
  z-index: 110;
  overflow-y: auto;
  transition: left 0.2s ease-in;
`;

const ButtonHome = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  border: 0;
  background: none;
`;

const BtnText = styled.span`
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-right: 0.5rem;
    background-image: url(${chevron});
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(90deg);
  }
`;

function Home(props) {
  return (
    <div className="container">
      <ButtonHome onClick={props.menuToggled}>
        <BtnText>Home</BtnText>
      </ButtonHome>
    </div>
  );
}

Home.propTypes = {
  menuToggled: PropTypes.func.isRequired,
};

const Head = styled.div`position: relative;`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Caption = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0.5rem;
  font-family: Lora, serif;
  font-size: 1.25rem;
  line-height: 1.25rem;
  background-color: rgba(255, 255, 255, 0.7);
`;

function Heading() {
  return (
    <Head>
      <Img // eslint-disable-next-line max-len
        src="//assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$&wid=390"
        alt="Burberry Men"
      />
      <Caption className="container">Men</Caption>
    </Head>
  );
}

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: left;
  font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;
  background: #fff;
  border: 0;
  &:first-child {
    margin-top: 1.5rem;
  }
`;

function Menu(props) {
  const buttons = category.map((button, key) => (
    <Link href={button.link} key={key.toString()}>
      {button.name}
    </Link>
  ));
  return (
    <Wrap menuToggled={props.menuToggled}>
      <Home menuToggled={props.toggleStepTwo} />
      <Heading />
      <div className="container">{buttons}</div>
    </Wrap>
  );
}

Menu.propTypes = {
  menuToggled: PropTypes.bool.isRequired,
  toggleStepTwo: PropTypes.func.isRequired,
};

export default Menu;
