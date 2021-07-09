import React from 'react';

import './index.scss';

interface ButtonProps {
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  function handleOnClick() {
    if (onClick) onClick();
  }

  return (
    <button
      type="button"
      className={['zd-button'].join(' ')}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
