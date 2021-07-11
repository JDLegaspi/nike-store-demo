import React from 'react';

interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  alignItems?: string;
  justifyContent?: string;
  flex?: number;
  alignSelf?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  alignItems,
  justifyContent,
  flex,
  alignSelf,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems,
        alignSelf,
        justifyContent,
        flex,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
