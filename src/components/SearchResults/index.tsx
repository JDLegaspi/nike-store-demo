import Product from 'components/Product';
import { Product as ProductType } from 'types/Product';
import React from 'react';
import './index.scss';
import SearchInfo from './SearchInfo';
import InfiniteScroll from 'react-infinite-scroll-component';

interface SearchResultsProps {
  products: ProductType[];
  productsLoading?: boolean;
  productsError?: string;
  totalNumberProducts: number;
  totalNumberRetailers: number;
  onScrollToBottom: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  products,
  productsError,
  productsLoading,
  totalNumberProducts,
  totalNumberRetailers,
  onScrollToBottom,
}) => {
  if (productsError) {
    return <div className="zd-search-error">{productsError}</div>;
  }

  if (productsLoading) {
    return <h4>Loading products...</h4>;
  }

  return (
    <div className="zd-search-results">
      <SearchInfo
        totalNumberProducts={totalNumberProducts}
        totalNumberRetailers={totalNumberRetailers}
      />
      <InfiniteScroll
        dataLength={products.length}
        next={onScrollToBottom}
        hasMore={products.length < totalNumberProducts}
        loader={
          <div style={{ marginTop: 20 }}>
            <h4>Loading...</h4>
          </div>
        }
      >
        <div className="zd-search-results-items">
          {products.map((product) => (
            <Product
              imageUrl={product.attributes.e_image_urls_detail_jpg[0][0]}
              currency={product.attributes.currency}
              productName={product.attributes.product_name}
              retailerUrl={product.attributes.retailer_url}
              retailerPrice={product.attributes.retailer_price}
              salePrice={product.attributes.sale_price}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SearchResults;
