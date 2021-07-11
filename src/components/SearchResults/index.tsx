import Product from 'components/Product';
import { Product as ProductObject } from 'utils/types/Product';
import React from 'react';
import './index.scss';
import SearchInfo from './SearchInfo';
import InfiniteScroll from 'react-infinite-scroll-component';
import ErrorText from 'components/ErrorText';
import { useHistory } from 'react-router-dom';

interface SearchResultsProps {
  products: ProductObject[];
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
  const history = useHistory();

  function handleProductClick(product: ProductObject) {
    history.push(`/${product.id}`);
  }

  if (productsError) {
    return (
      <div style={{ marginTop: 20 }}>
        <ErrorText>{productsError}</ErrorText>
      </div>
    );
  }

  if (productsLoading) {
    return (
      <div style={{ marginTop: 20 }}>
        <h4>Loading products...</h4>
      </div>
    );
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
          {products.map((product) => {
            const {
              attributes: {
                e_image_urls_detail_jpg,
                e_retailer_display_domain,
                converted_currency,
                converted_retailer_price,
                converted_sale_price,
                currency,
                product_name,
                retailer_price,
                sale_price,
              },
            } = product;

            return (
              <Product
                imageUrl={e_image_urls_detail_jpg[0][0]}
                currency={
                  converted_currency !== '' ? converted_currency : currency
                }
                productName={product_name}
                retailerUrl={e_retailer_display_domain}
                retailerPrice={
                  converted_currency !== ''
                    ? converted_retailer_price
                    : retailer_price
                }
                salePrice={
                  converted_currency !== '' && converted_sale_price > 0
                    ? converted_sale_price
                    : sale_price
                }
                onProductClick={() => handleProductClick(product)}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SearchResults;
