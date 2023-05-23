import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './AddAuthor.css';

interface AddAuthorProps {
	onSubmit: (addValue: string) => void;
}

const AddAuthor: React.FC<AddAuthorProps> = ({ onSubmit }) => {
	const [addValue, setAddValue] = useState('');

	const handleClick = () => {
		onSubmit(addValue);
	};

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddValue(event.target.value);
	};

	return (
		<div className='add-author-a'>
			<h4>Add author</h4>
			<p>Author name</p>
			<Input
				placeholder='Enter author name...'
				value={addValue}
				onChange={handleInputValue}
			/>
			<Button
				buttonText='Add author'
				className='button'
				onClick={handleClick}
			/>
		</div>
	);
};

export default AddAuthor;
