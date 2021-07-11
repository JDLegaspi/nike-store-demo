import axios from 'axios';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import ProductPage from 'pages/ProductPage';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Product, SearchResultsAPIResponse } from 'utils/types/Product';
import './index.scss';

interface HomePageProps {
  gender?: string;
}

const HomePage: React.FC<HomePageProps> = ({ gender }) => {
  const history = useHistory();
  const location = useLocation();

  const [currentGender, setCurrentGender] = useState<string>();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalNumberProducts, setTotalNumberProducts] = useState<number>(0);
  const [retailers, setRetailers] = useState<string[]>([]);
  const [queryPage, setQueryPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [productsError, setProductsError] = useState<string>();

  let { productId } = useParams<{ productId: string }>();
  const selectedProduct = products.find((product) => product.id === productId);

  const getProducts = useCallback(async () => {
    if (currentPage !== queryPage) {
      setProductsLoading(true);

      try {
        let queryUrl = `https://api.theurge.com.au/search-results?brands=Nike&page=${queryPage}&currency=AUD`;
        if (currentGender) queryUrl = queryUrl + `&gender=${currentGender}`;

        let productsResponse = await axios.get<SearchResultsAPIResponse>(
          queryUrl
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
  }, [products, retailers, queryPage, currentPage, currentGender]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (gender !== currentGender) {
      setCurrentGender(gender ?? undefined);
      resetSearch();
    }
  }, [gender, currentGender]);

  function resetSearch() {
    setProducts([]);
    setQueryPage(0);
    setCurrentPage(1);
  }

  function handleScrollToBottom() {
    setQueryPage(queryPage + 1);
  }

  function handleSelectGender(selectedGender: string) {
    resetSearch();
    history.push(`/${selectedGender}`);
  }

  function getHeader() {
    if (gender) {
      return (
        <Wrapper>
          <h1>{location.pathname.split('/')[1]}</h1>
        </Wrapper>
      );
    }

    return (
      <Hero>
        <div className="zd-home-page-content">
          <h1>Nike React Sneakers</h1>
          <h2>Pay in 4 interest-free installments.</h2>
          <Flex style={{ paddingTop: 8 }}>
            <div style={{ paddingRight: 16 }}>
              <Button onClick={() => handleSelectGender('Mens')}>Men</Button>
            </div>
            <Button onClick={() => handleSelectGender('Womens')}>Women</Button>
          </Flex>
        </div>
      </Hero>
    );
  }

  if (selectedProduct) return <ProductPage product={selectedProduct} />;

  return (
    <div>
      {getHeader()}
      <Wrapper>
        <SearchResults
          products={products}
          productsLoading={productsLoading && products.length === 0}
          productsError={productsError}
          totalNumberProducts={totalNumberProducts}
          totalNumberRetailers={retailers.length}
          onScrollToBottom={handleScrollToBottom}
        />
      </Wrapper>
    </div>
  );
};

export default HomePage;