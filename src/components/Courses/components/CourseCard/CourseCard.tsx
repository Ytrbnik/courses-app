import Button from '../../../../common/Button/Button';
import formatDuration from '../../../../helpers/formatDuration/formatDuration';

import './CourseCard.css';

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
interface CourseCardProps {
	course: Course;
	authors: Author[];
}

const CourseCard: React.FC<CourseCardProps> = ({ course, authors }) => {
	const authorNames = course.authors.map((authorId) => {
		const author = authors.find((author) => author.id === authorId);
		return author ? author.name : '';
	});

	const handleClick = () => {
		console.log('Click');
	};

	return (
		<li className='course-card' key={course.id}>
			<div className='left-side'>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className='right-side'>
				<dl>
					<dt>Authors:</dt>
					<dd>{authorNames.join(', ')}</dd>

					<dt>Duration:</dt>
					<dd>{formatDuration(course.duration)}</dd>

					<dt>Created:</dt>
					<dd>{course.creationDate.replace(/\//g, '-')}</dd>
				</dl>
				<Button
					className='button'
					buttonText='Show course'
					onClick={handleClick}
				/>
			</div>
		</li>
	);
};

export default CourseCard;
