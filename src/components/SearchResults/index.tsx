import Product from 'components/Product';
import { Product as ProductType } from 'types/Product';
import React from 'react';
import ExampleImageNike from 'assets/images/ExampleProductNike.png';
import './index.scss';
import SearchInfo from './SearchInfo';

interface SearchResultsProps {
  products?: ProductType[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
  return (
    <div className="zd-search-results">
      <SearchInfo />
      <div className="zd-search-results-items">
        {products
          ? products.map((product) => (
              <Product
                imageUrl={product.attributes.e_image_urls_detail_jpg[0][0]}
                currency={product.attributes.currency}
                productName={product.attributes.product_name}
                retailerUrl={product.attributes.retailer_url}
                retailerPrice={product.attributes.retailer_price}
                salePrice={product.attributes.sale_price}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchResults;
