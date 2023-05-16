import CourseCard from './CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
import { Course, Author } from '../../helpers/types';

interface CoursesProps {
	courses: Course[];
	authors: Author[];
}

const Courses: React.FC<CoursesProps> = ({ authors, courses }) => {
	return (
		<div className='courses'>
			<SearchBar/>
			<ul className='coursesList'>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} authors={authors} />
				))}
			</ul>
		</div>
	);
};

export default Courses;
