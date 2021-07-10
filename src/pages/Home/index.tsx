import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import SearchResults from 'components/SearchResults';
import Wrapper from 'components/Wrapper';
import React from 'react';
import './index.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
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
        <SearchResults />
      </Wrapper>
    </div>
  );
};

export default HomePage;
