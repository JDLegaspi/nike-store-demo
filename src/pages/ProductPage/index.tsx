import Flex from 'components/Flex';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Product } from 'types/Product';

import './index.scss';

interface ProductPageProps {
  product: Product;
  onPageBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onPageBack }) => {
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
    },
  } = product;

  // REFACTOR THIS
  function getPriceRounded(price: number) {
    return (Math.round(price * 100) / 100).toFixed(2);
  }

  function getCurrencyString(): string {
    let currencyString = '$';

    if (
      converted_currency ? converted_currency === 'AUD' : currency === 'AUD'
    ) {
      currencyString = 'A$';
    }

    return currencyString;
  }

  function getPriceElement(
    retailerPrice: number,
    salePrice?: number
  ): React.ReactNode {
    let shownPrice = getPriceRounded((salePrice ?? retailerPrice) / 4);

    let priceString: string = `${getCurrencyString()}${shownPrice}`;

    return (
      <Flex alignItems="center">
        <strong className="product-price">{priceString}</strong>
        {salePrice && (
          <strong className="discounted-price">
            {getCurrencyString()}
            {getPriceRounded(retailerPrice / 4)}
          </strong>
        )}
      </Flex>
    );
  }

  // END REFACTOR THIS

  return (
    <Wrapper>
      <Flex className="zd-product-page-flex-wrapper">
        <div className="zd-product-page-img-wrapper">
          <img src={e_image_urls_og} alt={product_name} />
        </div>
        <div className="zd-product-page-info">
          <h2>{product_name}</h2>
          <h4>{color}</h4>
          <h3>
            {getPriceElement(
              converted_retailer_price !== 0
                ? converted_retailer_price
                : retailer_price,
              converted_sale_price !== 0 ? converted_sale_price : sale_price
            )}
          </h3>
          <p>{long_description}</p>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default ProductPage;
