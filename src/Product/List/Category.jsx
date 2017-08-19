import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductPreviewExtended from '../Preview';

const Heading = styled.h2`
  margin: 2rem 0 1rem;
  font-family: Lora, serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
`;

function Head(props) {
  return (
    <Heading>
      {props.heading}
    </Heading>
  );
}

Head.propTypes = {
  heading: PropTypes.string.isRequired,
};

function ProductCategory(props) {
  return (
    <div className="container">
      <Head heading={props.heading} />
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={1395}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={12500}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={11000}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={1395}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={12500}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <ProductPreviewExtended
            link="/product"
            img="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=378&hei=505"
            alt="The Westminster – Long Heritage Trench Coat"
            fit="Regular fit"
            name="The Westminster – Long Heritage Trench Coat"
            colorsCount={3}
            price={11000}
          />
        </div>
      </div>
    </div>
  );
}

ProductCategory.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ProductCategory;
