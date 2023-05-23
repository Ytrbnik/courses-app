import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';

interface TitleProps {
	onSubmit: (submitValue: string) => void;
}

const Title: React.FC<TitleProps> = ({ onSubmit }) => {
	const [submitValue, setSubmithValue] = useState('');

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSubmithValue(event.target.value);
	};

	return (
		<div>
			<h4>Title</h4>
			<Input
				placeholder='Enter title'
				value={submitValue}
				onChange={handleInputValue}
			/>
		</div>
	);
};

export default Title;
