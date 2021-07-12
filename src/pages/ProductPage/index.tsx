import Flex from 'components/Flex';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Product } from 'utils/types/Product';
import ReactHtmlParser from 'react-html-parser';
import Price from 'components/Price';
import './index.scss';
import Button from 'components/Button';

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
      e_shipping_link,
      e_returns_link,
    },
  } = product;

  return (
    <div>
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
                currency={
                  converted_currency !== undefined
                    ? converted_currency
                    : currency
                }
              />
            </div>
            <Flex className="zd-product-page-call-to-action">
              <Button primary>Buy now</Button>
              <Button>Add to cart</Button>
            </Flex>
            <div className="zd-product-page-info-section">
              <h4>Description</h4>
              <div className="zd-product-page-info-section-description">
                {ReactHtmlParser(long_description)}
              </div>
            </div>
            {(e_shipping_link || e_returns_link) && (
              <div className="zd-product-page-info-section">
                <h4>Shipping and returns</h4>
                <p>
                  <a href={e_shipping_link} target="_blank" rel="noreferrer">
                    Our shipping policy
                  </a>
                  <br />
                  <a href={e_returns_link} target="_blank" rel="noreferrer">
                    Our returns policy
                  </a>
                </p>
              </div>
            )}
          </div>
        </Flex>
      </Wrapper>
    </div>
  );
};

export default ProductPage;
