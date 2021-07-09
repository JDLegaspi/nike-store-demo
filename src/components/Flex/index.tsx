import React from 'react';
import './index.scss';

interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  alignCenter?: boolean;
  justifyCenter?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  alignCenter = false,
  justifyCenter = false,
  ...props
}) => {
  let classes = [
    alignCenter && 'align-center',
    justifyCenter && 'justify-center',
  ].join(' ');

  return (
    <div className={['zd-flex', classes, className ?? ''].join(' ')} {...props}>
      {children}
    </div>
  );
};

export default Flex;
