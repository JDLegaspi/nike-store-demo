import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import React from 'react';
import { Product } from 'utils/types/Product';

interface SearchResultsPageProps {
  products: Product[];
  productsLoading?: boolean;
  productsError?: string;
  totalNumberProducts: number;
  totalNumberRetailers: number;
  onScrollToBottom: () => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  products,
  productsError,
  productsLoading,
  totalNumberProducts,
  totalNumberRetailers,
  onScrollToBottom,
}) => {
  return (
    <div>
      <Hero>
        <div className="zd-home-page-content">
          <h1>Nike React Sneakers</h1>
          <h2>Pay in 4 interest-free installments.</h2>
          <Flex style={{ paddingTop: 8 }}>
            <div style={{ paddingRight: 16 }}>
              <Button>Men</Button>
            </div>
            <Button>Women</Button>
          </Flex>
        </div>
      </Hero>
      <Wrapper>
        <SearchResults
          products={products}
          productsLoading={productsLoading}
          productsError={productsError}
          totalNumberProducts={totalNumberProducts}
          totalNumberRetailers={totalNumberRetailers}
          onScrollToBottom={onScrollToBottom}
        />
      </Wrapper>
    </div>
  );
};

export default SearchResultsPage;
