import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { mockedAuthorsList } from '../../helpers/dateGenerator';

import Title from './components/Title/Title';
import Description from './components/Description/Description';
import AuthorsList from './components/AuthorsList/AuthorsList';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Duration from './components/Duration/Duration';
import CreateCourseBtn from './components/CreateCourseBtn/CreateCourseBtn';

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

interface CreateCourseProps {
	onCourseCreated: (course: Course) => void;
}

const CreateCourse: React.FC<CreateCourseProps> = ({ onCourseCreated }) => {
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [authors, setAuthors] = useState<Author[]>([]);
	const [addNewCourse, setAddNewCourse] = useState<Course[]>([]);
	const [courseDuration, setCourseDuration] = useState(Number);
	const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);

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
		setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
	};

	const allAuthors = [...mockedAuthorsList, ...authors];

	const today = new Date();
	const currentDate = today.toISOString().slice(0, 10);

	const submitedDuration = (duration: number) => {
		setCourseDuration(duration);
	};

	const handleSelectedAuthorsChange = (authors: Author[]) => {
		setSelectedAuthors(authors);
	};

	const addingNewCourse = () => {
		if (!courseTitle || !courseDescription || !courseDuration) {
			alert('Please fill in all the required fields.');
			return;
		}

		const newCourse: Course = {
			id: uuidv4(),
			title: courseTitle,
			description: courseDescription,
			creationDate: currentDate,
			duration: courseDuration,
			authors: selectedAuthors.map((author) => author.id),
		};
		setAddNewCourse((prevCourses) => [...prevCourses, newCourse]);
		onCourseCreated(newCourse);
	};

	return (
		<div>
			<div className='top'>
				<Title value={courseTitle} onChange={hendelTitleChenge} />
				<CreateCourseBtn onClick={addingNewCourse} />
			</div>
			<Description
				value={courseDescription}
				onChange={hendelDescriptionChange}
			/>
			<div className='aditional-info'>
				<div className='left-side-a'>
					<AddAuthor onAddAuthor={addAuthor} />
					<Duration value={courseDuration} onSubmit={submitedDuration} />
				</div>
				<div className='right-side-a'>
					<AuthorsList
						authors={allAuthors}
						onSelectedAuthorsChange={handleSelectedAuthorsChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
