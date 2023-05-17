import React from 'react';

interface Props {
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange }) => {
	return (
		<input
			type='text'
			className='input'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name='input'
		/>
	);
};

export default Input;
