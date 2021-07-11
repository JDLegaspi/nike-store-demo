import Flex from 'components/Flex';
import React from 'react';
import { getCurrencyString, getPriceRounded } from 'utils/Helpers';

interface PriceProps {
  retailerPrice: number;
  salePrice?: number;
  currency: string;
}

const Price: React.FC<PriceProps> = ({
  currency,
  retailerPrice,
  salePrice,
}) => {
  let shownPrice = getPriceRounded((salePrice ?? retailerPrice) / 4);

  let priceString: string = `${getCurrencyString(currency)}${shownPrice}`;

  return (
    <Flex alignItems="center">
      <strong className="product-price">{priceString}</strong>
      {salePrice && (
        <strong className="discounted-price">
          {getCurrencyString(currency)}
          {getPriceRounded(retailerPrice / 4)}
        </strong>
      )}
    </Flex>
  );
};

export default Price;
