import React from 'react';
import './Button.css';

interface Props {
	buttonText: string;
	onClick: () => void;
	className: string;
}

const Button: React.FC<Props> = ({ buttonText, onClick, className }) => {
	return (
		<button className={className} onClick={onClick} >
			{buttonText}
		</button>
	);
};

export default Button;
