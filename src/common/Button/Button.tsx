import React from 'react';
import './Button.css';

interface Props {
  buttonText: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ buttonText, onClick }) => {
  return (
    <button className="button"
      onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;