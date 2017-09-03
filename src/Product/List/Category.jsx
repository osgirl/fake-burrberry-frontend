import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductPreviewExtended from '../Preview';

const Heading = styled.h2`
  margin: 0;
  padding: 2rem 0 1rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;

  @media screen and (min-width: 48rem) {
    padding: 4rem 0 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

function Head(props) {
  return <Heading>{props.heading}</Heading>;
}

Head.propTypes = {
  heading: PropTypes.string.isRequired,
};

const productsCategoryOne = [
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    alt: 'The Westminster – Long Heritage Trench Coat',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    alt: 'The Westminster – Long Heritage Trench Coat',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    alt: 'The Westminster – Long Heritage Trench Coat',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    alt: 'The Westminster – Long Heritage Trench Coat',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
  {
    to: '/men/clothes/trenchcoat',
    img:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505',
    label: 'Regular fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    colorsCount: 3,
    price: 1395,
  },
];

function ProductCategory(props) {
  const products = productsCategoryOne.map((product, key) => (
    <div key={key.toString()} className="col-xs-6 col-md-3">
      <ProductPreviewExtended
        to={product.to}
        img={product.img}
        alt={product.name}
        label={product.label}
        name={product.name}
        colorsCount={product.colorsCount}
        price={product.price}
      />
    </div>
  ));
  return (
    <div>
      <Head heading={props.heading} />
      <div className="row">{products}</div>
    </div>
  );
}

ProductCategory.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ProductCategory;
