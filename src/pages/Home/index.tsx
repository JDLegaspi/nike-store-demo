import axios from 'axios';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import ProductPage from 'pages/ProductPage';
import React, { useCallback, useEffect, useState } from 'react';
import { Product, SearchResultsAPIResponse } from 'types/Product';
import './index.scss';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalNumberProducts, setTotalNumberProducts] = useState<number>(0);
  const [retailers, setRetailers] = useState<string[]>([]);
  const [queryPage, setQueryPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [productsError, setProductsError] = useState<string>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const getProducts = useCallback(async () => {
    if (currentPage !== queryPage) {
      setProductsLoading(true);

      try {
        let productsResponse = await axios.get<SearchResultsAPIResponse>(
          `https://api.theurge.com.au/search-results?brands=Nike&page=${queryPage}&currency=AUD`
        );

        if (productsResponse.status !== 200) {
          throw Error(
            'There was a problem getting the search results. Please un-rig the endpoint to fail and try again.'
          );
        }

        let newRetailersList: string[] = [...retailers];
        let queriedSearchResultsData = productsResponse.data.data;

        for (const productResponseItem of queriedSearchResultsData) {
          let retailerName =
            productResponseItem.attributes.e_retailer_facet_name;

          if (!newRetailersList.includes(retailerName))
            newRetailersList.push(retailerName);
        }

        setCurrentPage(queryPage);
        setProducts([...products, ...queriedSearchResultsData]);
        setTotalNumberProducts(productsResponse.data.meta.meta.total);
        setRetailers(newRetailersList);
        setProductsLoading(false);
      } catch (e) {
        setProductsError(e.toString());
        setProductsLoading(false);
      }
    }
  }, [products, retailers, queryPage, currentPage]);

  function handleScrollToBottom() {
    setQueryPage(queryPage + 1);
  }

  function handleProductSelected(product: Product) {
    setSelectedProduct(product);
  }

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // NOTE TO SELF: when changing currency, route to a different route with currency as params

  if (selectedProduct) {
    return (
      <ProductPage
        product={selectedProduct}
        onPageBack={() => setSelectedProduct(undefined)}
      />
    );
  }

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
          productsLoading={productsLoading && retailers.length === 0}
          productsError={productsError}
          totalNumberProducts={totalNumberProducts}
          totalNumberRetailers={retailers.length}
          onScrollToBottom={handleScrollToBottom}
          onProductSelected={handleProductSelected}
        />
      </Wrapper>
    </div>
  );
};

export default HomePage;
