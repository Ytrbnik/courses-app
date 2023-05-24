import React, { useState, useEffect } from 'react';

import Button from '../../../../common/Button/Button';

import { Author } from '../../../../helpers/Types/types';

import './AuthorsList.css';

interface AuthorsListProps {
	authors: Author[];
}

const AuthorsList: React.FC<AuthorsListProps> = ({ authors }) => {
	const [availableAuthors, setAvailableAuthors] = useState<Author[]>(authors);
	const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);

	useEffect(() => {
		setAvailableAuthors(authors);
	}, [authors]);

	const handleAddAuthor = (author: Author) => {
		const updatedAvailableAuthors = availableAuthors.filter(
			(a) => a.id !== author.id
		);
		const updatedSelectedAuthors = [...selectedAuthors, author];
		setAvailableAuthors(updatedAvailableAuthors);
		setSelectedAuthors(updatedSelectedAuthors);
	};

	const handleRemoveAuthor = (author: Author) => {
		const updatedAvailableAuthors = [...availableAuthors, author];
		const updatedSelectedAuthors = selectedAuthors.filter(
			(a) => a.id !== author.id
		);
		setAvailableAuthors(updatedAvailableAuthors);
		setSelectedAuthors(updatedSelectedAuthors);
	};

	return (
		<div>
			<h4>Authors</h4>
			<ul>
				{availableAuthors.map((author) => (
					<li key={author.id}>
						{author.name}
						<Button
							buttonText='Add author'
							className='button btn-a'
							onClick={() => handleAddAuthor(author)}
						/>
					</li>
				))}
			</ul>
			<h4>Selected Authors</h4>
			<ul>
				{selectedAuthors.length > 0 ? (
					selectedAuthors.map((author) => (
						<li key={author.id}>
							{author.name}
							<Button
								buttonText='Delete author'
								className='button btn-a'
								onClick={() => handleRemoveAuthor(author)}
							/>
						</li>
					))
				) : (
					<li>No authors selected</li>
				)}
			</ul>
		</div>
	);
};

export default AuthorsList;
