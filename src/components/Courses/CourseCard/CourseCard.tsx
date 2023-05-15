import Button from '../../../common/Button/Button';

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

	const formatDuration = (duration: number): string => {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;
		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')} hours`;
	};

	const handleClick = () => {
		console.log('Click');
	};

	return (
		<li className='coursecard' key={course.id}>
			<div className='leftside'>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className='rightside'>
				<dl>
					<dt>Authors:</dt>
					<dd>{authorNames.join(', ')}</dd>

					<dt>Duration:</dt>
					<dd>{formatDuration(course.duration)}</dd>

					<dt>Created:</dt>
					<dd>{course.creationDate}</dd>
				</dl>
				<Button buttonText='Show course' onClick={handleClick} />
			</div>
		</li>
	);
};

export default CourseCard;
