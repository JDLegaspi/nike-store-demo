import Button from 'components/Button';
import Flex from 'components/Flex';
import Hero from 'components/Hero';
import Product from 'components/Product';
import Wrapper from 'components/Wrapper';
import React from 'react';
import './index.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <Hero>
        <h1>Nike React Sneakers</h1>
        <h2>Pay in 4 interest-free installments.</h2>
        <Flex style={{ paddingTop: 8 }}>
          <div style={{ paddingRight: 16 }}>
            <Button>Men</Button>
          </div>
          <Button>Women</Button>
        </Flex>
      </Hero>
      <div className="zd-search-results-wrapper">
        <Wrapper>
          <Product
            imageUrl="https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.jpg"
            currency="USD"
            productName="Nike Pegasus Trail 2 GORE-TEX"
            retailerUrl="https://www.nikepants.com/dfsd/fs/df/sdf/sdf"
            retailerPrice={170}
            salePrice={85}
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default HomePage;
