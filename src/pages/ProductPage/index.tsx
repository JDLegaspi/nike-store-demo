import Flex from 'components/Flex';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Product } from 'utils/types/Product';
import ReactHtmlParser from 'react-html-parser';
import Price from 'components/Price';
import './index.scss';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const {
    attributes: {
      e_image_urls_og,
      product_name,
      color,
      long_description,
      currency,
      converted_currency,
      retailer_price,
      sale_price,
      converted_retailer_price,
      converted_sale_price,
      gender,
    },
  } = product;

  return (
    <Wrapper className="zd-product-page">
      <Flex className="zd-product-page-flex-wrapper">
        <div className="zd-product-page-img-wrapper">
          <img src={e_image_urls_og} alt={product_name} />
        </div>
        <div className="zd-product-page-info">
          <div className="zd-product-page-gender">{gender}</div>
          <h2>{product_name}</h2>
          <div className="zd-product-page-color">{color}</div>
          <div className="zd-product-page-price">
            <Price
              retailerPrice={
                converted_retailer_price !== 0
                  ? converted_retailer_price
                  : retailer_price
              }
              salePrice={
                converted_sale_price !== 0 ? converted_sale_price : sale_price
              }
              currency={converted_currency ?? currency}
            />
          </div>
          <p>{ReactHtmlParser(long_description)}</p>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default ProductPage;
