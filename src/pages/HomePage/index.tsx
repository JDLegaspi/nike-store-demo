import axios from 'axios';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import ProductPage from 'pages/ProductPage';
import React, { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useHistory, useLocation } from 'react-router-dom';
import { Product, SearchResultsAPIResponse } from 'utils/types/Product';
import './index.scss';

interface HomePageProps {
  gender?: string;
}

const HomePage: React.FC<HomePageProps> = ({ gender }) => {
  const history = useHistory();
  const location = useLocation();

  const [currentGender, setCurrentGender] = useState<string | undefined>(
    gender ?? undefined
  );
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
        setProducts(
          queryPage === 1
            ? queriedSearchResultsData
            : [...products, ...queriedSearchResultsData]
        );
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
      setProducts([]);
      setQueryPage(1);
      setCurrentPage(0);
      setSelectedProduct(undefined);
    }
  }, [gender, currentGender]);

  function handleSelectProduct(product?: Product) {
    setSelectedProduct(product ?? undefined);
  }

  function handleUnselectProduct() {
    setSelectedProduct(undefined);
  }

  function handleScrollToBottom() {
    setQueryPage(queryPage + 1);
  }

  function handleSelectGender(selectedGender: string) {
    history.push(`/${selectedGender}`);
  }

  function getHeader() {
    if (gender) {
      return (
        <Wrapper className="zd-cat-header">
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

  return (
    <>
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
            onSelectProduct={handleSelectProduct}
          />
        </Wrapper>
      </div>
      <ReactModal
        isOpen={selectedProduct !== undefined}
        onRequestClose={handleUnselectProduct}
      >
        {selectedProduct !== undefined && (
          <div className="zd-modal-product">
            <Flex justifyContent="flex-end">
              <div
                className="zd-modal-close-button"
                onClick={handleUnselectProduct}
              >
                close
              </div>
            </Flex>
            <ProductPage product={selectedProduct} />
          </div>
        )}
      </ReactModal>
    </>
  );
};

export default HomePage;
