import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { mockedAuthorsList } from '../../helpers/dateGenerator';

import Title from './components/Title/Title';
import Button from '../../common/Button/Button';
import Description from './components/Description/Description';
import AuthorsList from './components/Authors/AuthorsList';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Duration from './components/Duration/Duration';

import './CreateCourse.css';

interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

interface Author {
	id: string;
	name: string;
}

const CreateCourse = () => {
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [authors, setAuthors] = useState<Author[]>([]);

	const hendelTitleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCourseTitle(event.target.value);
	};

	const hendelDescriptionChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setCourseDescription(event.target.value);
	};

	const addAuthor = (authorName: string) => {
		const newAuthor: Author = {
			id: uuidv4(),
			name: authorName,
		};
		console.log('Author Name:', newAuthor);
		setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
	};

	const allAuthors = [...mockedAuthorsList, ...authors];

	const submitedDuration = (inputValue: string) => {};

	const hendelClick = () => {
		console.log('Click');
	};

	return (
		<div>
			<div className='top'>
				<Title value={courseTitle} onChange={hendelTitleChenge} />
				<Button
					buttonText='Create course'
					onClick={hendelClick}
					className='button'
				/>
			</div>
			<Description
				value={courseDescription}
				onChange={hendelDescriptionChange}
			/>
			<div className='aditional-info'>
				<div className='left-side-a'>
					<AddAuthor onAddAuthor={addAuthor} />
					<Duration onSubmit={submitedDuration} />
				</div>
				<div className='right-side-a'>
					<AuthorsList authors={allAuthors} />
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
