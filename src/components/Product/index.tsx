import Flex from 'components/Flex';
import React from 'react';
import './index.scss';

interface ProductProps {
  productName: string;
  retailerPrice: number;
  salePrice?: number;
  currency: string;
  retailerUrl: string;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({
  currency,
  retailerPrice,
  retailerUrl,
  productName,
  salePrice,
  imageUrl,
}) => {
  const urlArray = retailerUrl.split('/');
  const strippedUrl = urlArray[2];

  function getPriceRounded(price: number) {
    return Math.round(price * 100) / 100;
  }

  function getCurrencyString(): string {
    let currencyString = '$';

    if (currency === 'AUD') {
      currencyString = 'A$';
    }

    return currencyString;
  }

  function getPriceElement(): React.ReactNode {
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

  return (
    <div className="zd-product">
      <div className="zd-product-inner">
        <div className="zd-product-img-wrapper">
          <img src={imageUrl} alt={productName} />
        </div>
        <p className="zd-product-name">{productName}</p>
        <span className="zd-product-retail-url">{strippedUrl}</span>
        <div className="zd-product-price">{getPriceElement()}</div>
        <div className="zd-product-payment-plan">
          {getCurrencyString()}
          {getPriceRounded(salePrice ?? retailerPrice)} split into 4 easy
          payments
        </div>
      </div>
    </div>
  );
};

export default Product;
