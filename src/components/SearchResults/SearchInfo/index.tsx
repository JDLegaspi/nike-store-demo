import Flex from 'components/Flex';
import React from 'react';
import './index.scss';

interface SearchInfoProps {
  totalNumberProducts: number;
  totalNumberRetailers: number;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  totalNumberRetailers,
  totalNumberProducts,
}) => {
  return (
    <Flex justifyContent="space-between" className="zd-search-info">
      <div className="zd-related-searches">
        More from Nike - <a href="/">Air Max</a>, <a href="/">Air Jordan</a>,{' '}
        <a href="/">Flyknit</a>...
      </div>
      <div className="zd-results-number">
        {totalNumberProducts} product{totalNumberProducts > 1 ? 's' : ''} from{' '}
        {totalNumberRetailers} retailer{totalNumberRetailers > 1 ? 's' : ''}
      </div>
    </Flex>
  );
};

export default SearchInfo;
