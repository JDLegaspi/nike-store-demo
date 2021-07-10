import Product from 'components/Product';
import React from 'react';
import ExampleImageNike from 'assets/images/ExampleProductNike.png';
import './index.scss';
import SearchResultsInfo from './SearchInfo';

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  return (
    <div className="zd-search-results">
      <SearchResultsInfo />
      <div className="zd-search-results-items">
        <Product
          imageUrl="https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.jpg"
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nikepants.com/dfsd/fs/df/sdf/sdf"
          retailerPrice={170}
          salePrice={85}
        />
        <Product
          imageUrl={ExampleImageNike}
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nike.com/blablabla"
          retailerPrice={170}
        />
        <Product
          imageUrl="https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.jpg"
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nikepants.com/dfsd/fs/df/sdf/sdf"
          retailerPrice={170}
          salePrice={85}
        />
        <Product
          imageUrl={ExampleImageNike}
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nike.com/blablabla"
          retailerPrice={170}
        />
        <Product
          imageUrl="https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.jpg"
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nikepants.com/dfsd/fs/df/sdf/sdf"
          retailerPrice={170}
          salePrice={85}
        />
        <Product
          imageUrl={ExampleImageNike}
          currency="AUD"
          productName="Nike Pegasus Trail 2 GORE-TEX"
          retailerUrl="https://www.nike.com/blablabla"
          retailerPrice={170}
        />
      </div>
    </div>
  );
};

export default SearchResults;
