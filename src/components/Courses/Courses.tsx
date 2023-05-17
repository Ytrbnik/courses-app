import React, { SetStateAction, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import AddNewCourse from './components/AddNewCourse/AddNewCourse';
import { Course, Author } from '../../helpers/Types/types';

import './Courses.css';

interface CoursesProps {
	courses: Course[];
	authors: Author[];
}

const Courses: React.FC<CoursesProps> = ({ courses, authors}) => {
  const [matchingCourses, setMatchingCourses] = useState<Course[]>(courses);

    const handleSearch = (searchValue: string) => {
		if (searchValue.trim() === '') {
		  setMatchingCourses(courses);
		} else {
		  const filteredCourses = courses.filter((course: Course) => {
			const lowerCaseSearchValue = searchValue.toLowerCase();
			const lowerCaseTitle = course.title.toLowerCase();
			const lowerCaseId = course.id.toLowerCase();

			return (
			  lowerCaseTitle.includes(lowerCaseSearchValue) || lowerCaseId.includes(lowerCaseSearchValue)
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
      <div className='panel'>
        <SearchBar onSearch={handleSearch} />
        <AddNewCourse />
      </div>
      <ul className='coursesList'>{elements}</ul>
    </div>
  );
};

export default Courses;
