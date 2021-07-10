import React from 'react';

interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  alignItems?: string;
  justifyContent?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  alignItems,
  justifyContent,
  style,
  ...props
}) => {
  return (
    <div
      style={{ display: 'flex', alignItems, justifyContent, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
