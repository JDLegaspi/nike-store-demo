import React from 'react';
import './index.scss';

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {}

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => (
  <div className="zd-wrapper" {...props}>
    {children}
  </div>
);

export default Wrapper;
