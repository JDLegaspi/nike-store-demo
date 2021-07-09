import React from 'react';
import './index.scss';

interface FlexProps extends React.HTMLProps<HTMLDivElement> {}

const Flex: React.FC<FlexProps> = ({ children, ...props }) => (
  <div className="zd-flex" {...props}>
    {children}
  </div>
);

export default Flex;
