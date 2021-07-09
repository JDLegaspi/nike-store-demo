import React from 'react';
import Flex from '../Flex';
import Wrapper from '../Wrapper';
import './index.scss';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Flex className="zd-header">
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};
