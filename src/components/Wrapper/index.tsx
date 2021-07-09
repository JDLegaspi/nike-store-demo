import React from 'react';
import './index.scss';

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div className="zd-wrapper">{children}</div>
);

export default Wrapper;
