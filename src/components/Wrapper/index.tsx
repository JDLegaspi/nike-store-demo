import React from 'react';
import './index.scss';

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {}

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => (
  <div className="zd-wrapper-outer" {...props}>
    <div className="zd-wrapper">{children}</div>
  </div>
);

export default Wrapper;
