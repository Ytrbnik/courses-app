import React, { useState } from 'react';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './AddAuthor.css';

interface AddAuthorProps {
	onAddAuthor: (addAuthorName: string) => void;
}

const AddAuthor: React.FC<AddAuthorProps> = ({ onAddAuthor }) => {
	const [authorName, setAuthorName] = useState('');

	const handleAddAuthor = () => {
		onAddAuthor(authorName);
		setAuthorName('');
	};

	const handleAuthorNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setAuthorName(event.target.value);
	};

	return (
		<div className='add-author-a'>
			<h4>Add author</h4>
			<p>Author name</p>
			<Input
				placeholder='Enter author name...'
				value={authorName}
				onChange={handleAuthorNameChange}
			/>
			<Button
				buttonText='Add author'
				className='button'
				onClick={handleAddAuthor}
			/>
		</div>
	);
};

export default AddAuthor;
