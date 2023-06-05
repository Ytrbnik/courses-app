import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Courses from '../components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from '../Mocks/Mocks';

import './App.css';
import { Course } from '../Types/types';

const App: React.FC = () => {
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);

	const onCourseCreated = (course: Course[]) => {
		setCourses((prevCourses) => [...prevCourses, ...course]);
		console.log('New course created:', course);
	};

	return (
		<div className='app'>
			<Header />
			<Courses
				onCourseCreated={onCourseCreated}
				courses={courses}
				authors={mockedAuthorsList}
			/>
		</div>
	);
};

export default App;
