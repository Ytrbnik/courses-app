import Title from './components/Title/Title';
import Button from '../../common/Button/Button';
import Description from './components/Description/Description';
import Authors from './components/Authors/Authors';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import AddAuthor from './components/AddAuthor/AddAuthor';
import Duration from './components/Duration/Duration';

import './CreateCourse.css';

const CreateCourse = () => {
	const submitedTitle = (submitValue: string) => {};

	const hendelClick = () => {
		console.log('Click');
	};

	const addenAutor = (addValue: string) => {};

	const submitedDuration = (inputValue: string) => {};

	return (
		<div>
			<div className='top'>
				<Title onSubmit={submitedTitle} />
				<Button
					buttonText='Create course'
					onClick={hendelClick}
					className='button'
				/>
			</div>
			<Description />
			<div className='aditional-info'>
				<div className='left-side-a'>
					<AddAuthor onSubmit={addenAutor} />
					<Duration onSubmit={submitedDuration} />
				</div>
				<div className='right-side-a'>
					<Authors />
					<CourseAuthors />
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
