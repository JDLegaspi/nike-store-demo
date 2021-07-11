import Price from 'components/Price';
import React from 'react';
import { getCurrencyString, getPriceRounded } from 'utils/Helpers';
import './index.scss';

interface ProductProps {
  productName: string;
  retailerPrice: number;
  salePrice?: number;
  currency: string;
  retailerUrl: string;
  imageUrl: string;
  onProductClick: () => void;
}

const Product: React.FC<ProductProps> = ({
  currency,
  retailerUrl,
  productName,
  retailerPrice,
  salePrice,
  imageUrl,
  onProductClick,
}) => {
  return (
    <div className="zd-product" onClick={onProductClick}>
      <div className="zd-product-inner">
        <div className="zd-product-img-wrapper">
          <img src={imageUrl} alt={productName} />
        </div>
        <p className="zd-product-name">{productName}</p>
        <span className="zd-product-retail-url">{retailerUrl}</span>
        <div className="zd-product-price">
          <Price
            currency={currency}
            retailerPrice={retailerPrice}
            salePrice={salePrice}
          />
        </div>
        <div className="zd-product-payment-plan">
          {getCurrencyString(currency)}
          {getPriceRounded(salePrice ?? retailerPrice)} split into 4 easy
          payments
        </div>
      </div>
    </div>
  );
};

export default Product;
