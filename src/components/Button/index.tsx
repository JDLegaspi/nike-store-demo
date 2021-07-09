import React from 'react';
import './index.scss';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  function handleOnClick() {
    if (onClick) onClick();
  }

  return (
    <button type="button" className="zd-button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
