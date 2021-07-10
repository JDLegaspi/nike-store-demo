import Flex from 'components/Flex';
import React from 'react';
import './index.scss';

type WrapperProps = React.HTMLProps<HTMLDivElement>;

const Wrapper: React.FC<WrapperProps> = ({ children, className, ...props }) => (
  <Flex
    justifyContent="center"
    className={['zd-wrapper-outer', className ?? ''].join(' ')}
    {...props}
  >
    <div className="zd-wrapper">{children}</div>
  </Flex>
);

export default Wrapper;
