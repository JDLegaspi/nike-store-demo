import React from 'react';
import './index.scss';

interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  primary = false,
}) => {
  function handleOnClick() {
    if (onClick) onClick();
  }

  return (
    <button
      type="button"
      className={`zd-button ${primary ? 'primary' : ''}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
