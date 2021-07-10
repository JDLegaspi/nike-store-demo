import Flex from 'components/Flex';
import React from 'react';
import './index.scss';

interface SearchInfoProps {}

const SearchInfo: React.FC<SearchInfoProps> = () => {
  return (
    <Flex justifyContent="space-between" className="zd-search-info">
      <div className="zd-related-searches">
        More from Nike - <a href="#">Air Max</a>, <a href="#">Air Jordan</a>,{' '}
        <a href="#">Flyknit</a>...
      </div>
      <div className="zd-results-number">120 products from 8 retailers</div>
    </Flex>
  );
};

export default SearchInfo;
