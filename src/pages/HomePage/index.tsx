import axios from 'axios';
import ProductPage from 'pages/ProductPage';
import SearchResultsPage from 'pages/SearchResultsPage';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Product, SearchResultsAPIResponse } from 'utils/types/Product';
import './index.scss';

const HomePage: React.FC = () => {
  const { path } = useRouteMatch();

  const [products, setProducts] = useState<Product[]>([]);
  const [totalNumberProducts, setTotalNumberProducts] = useState<number>(0);
  const [retailers, setRetailers] = useState<string[]>([]);
  const [queryPage, setQueryPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [productsError, setProductsError] = useState<string>();

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

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // NOTE TO SELF: when changing currency, route to a different route with currency as params

  console.log('hi');

  return (
    <Switch>
      <Route exact path={path}>
        <SearchResultsPage
          products={products}
          productsLoading={productsLoading && retailers.length === 0}
          productsError={productsError}
          totalNumberProducts={totalNumberProducts}
          totalNumberRetailers={retailers.length}
          onScrollToBottom={handleScrollToBottom}
        />
      </Route>
      <Route path={`${path}/:productId`}>
        <ProductPage products={products} />
      </Route>
    </Switch>
  );
};

export default HomePage;
