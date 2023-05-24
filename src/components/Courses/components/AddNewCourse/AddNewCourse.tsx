import React, { useState } from 'react';

import Button from '../../../../common/Button/Button';

interface AddNewCourseProps {
	onClick: (changeValue: string) => void;
}

const AddNewCourse: React.FC<AddNewCourseProps> = ({ onClick }) => {
	const [changeValue, setChangeValue] = useState('');

	const handleClick = () => {
		onClick(changeValue);
	};

	return (
		<Button
			className='addNewCourseBtn'
			buttonText='Add new course'
			onClick={handleClick}
		/>
	);
};

export default AddNewCourse;
