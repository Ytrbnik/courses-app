import React from 'react';

import Button from '../../../../common/Button/Button';

interface CreateCourseBtnProps {
	onClick: () => void;
}

const CreateCourseBtn: React.FC<CreateCourseBtnProps> = ({ onClick }) => {
	return (
		<Button buttonText='Create course' onClick={onClick} className='button' />
	);
};

export default CreateCourseBtn;
