import React, { useState } from 'react';
import { Course, Author } from '../../helpers/Types/types';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import AddNewCourse from './components/AddNewCourse/AddNewCourse';
import CreateCourse from '../CreateCourse/CreateCourse';

import './Courses.css';

interface CoursesProps {
	courses: Course[];
	authors: Author[];
	onCourseCreated: (course: Course[]) => void;
}

const Courses: React.FC<CoursesProps> = ({
	courses,
	authors,
	onCourseCreated,
}) => {
	const [matchingCourses, setMatchingCourses] = useState<Course[]>(courses);
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const addNewCourse = (course: Course) => {
		onCourseCreated([...courses, course]);
		setShowCreateCourse(false);
		setMatchingCourses([...matchingCourses, course]);
	};

	const handleSearch = (searchValue: string) => {
		if (searchValue.trim() === '') {
			setMatchingCourses(courses);
		} else {
			const filteredCourses = courses.filter((course: Course) => {
				const lowerCaseSearchValue = searchValue.toLowerCase();
				const lowerCaseTitle = course.title.toLowerCase();
				const lowerCaseId = course.id.toLowerCase();

				return (
					lowerCaseTitle.includes(lowerCaseSearchValue) ||
					lowerCaseId.includes(lowerCaseSearchValue)
				);
			});

			setMatchingCourses(filteredCourses);
		}
	};

	const elements = matchingCourses.map((course: Course) => (
		<CourseCard key={course.id} course={course} authors={authors} />
	));

	return (
		<div className='courses'>
			{showCreateCourse ? (
				<CreateCourse onCourseCreated={addNewCourse} />
			) : (
				<div>
					<div className='panel'>
						<SearchBar onSearch={handleSearch} />
						<AddNewCourse onClick={() => setShowCreateCourse(true)} />
					</div>
					<ul className='coursesList'>{elements}</ul>
				</div>
			)}
		</div>
	);
};

export default Courses;
