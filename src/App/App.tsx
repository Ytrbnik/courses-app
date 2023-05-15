import Header from '../components/Header/Header';
import Courses from '../components/Courses/Courses';
import { mockedCoursesList, mockedAuthorsList } from '../helpers/dateGenerator'

import './App.css';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Courses courses={mockedCoursesList} authors={mockedAuthorsList} />
		</div>
	);
};

export default App;
