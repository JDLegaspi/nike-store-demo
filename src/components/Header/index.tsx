import React from 'react';
import Flex from '../Flex';
import Wrapper from '../Wrapper';
import './index.scss';
import NikeImgSrc from 'assets/images/nike_1.png';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Flex className="zd-header">
      <div className="decorative-circle" />
      <img src={NikeImgSrc} alt="Womens Nike Air Force" />
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};
