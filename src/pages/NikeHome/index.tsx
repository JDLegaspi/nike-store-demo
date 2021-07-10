import axios from 'axios';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import React, { useCallback, useEffect, useState } from 'react';
import { Product } from 'types/Product';
import './index.scss';

const Nike: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [productsLoading, setProductsLoading] = useState<boolean>(false);
  const [productsError, setProductsError] = useState<boolean>(false);

  const getProducts = useCallback(async () => {
    if (products === undefined) {
      try {
        let productsResponse = await axios.get(
          'https://api.theurge.com.au/search-results?brands=Nike'
        );

        if (productsResponse.status !== 200) {
          throw Error(
            'There was a problem getting the search results. Please un-rig the endpoint to fail and try again.'
          );
        }

        setProducts(productsResponse.data.data);
      } catch (e) {
        setProductsError(e.toString());
      }
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
        {products !== undefined ? <SearchResults products={products} /> : null}
      </Wrapper>
    </div>
  );
};

export default Nike;
