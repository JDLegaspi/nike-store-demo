import React from 'react';
import Flex from '../Flex';
import Wrapper from '../Wrapper';
import './index.scss';
import NikeImgSrc from 'assets/images/nike_1.png';

const Hero: React.FC = ({ children }) => {
  return (
    <Flex alignItems="center" className="zd-hero">
      <div className="decorative-circle" />
      <img src={NikeImgSrc} alt="Womens Nike Air Force" />
      <Wrapper>{children}</Wrapper>
    </Flex>
  );
};

export default Hero;
