import React from 'react';

import Input from '../../../../common/Input/Input';

interface TitleProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Title: React.FC<TitleProps> = ({ value, onChange }) => {
	return (
		<div>
			<h4>Title</h4>
			<Input placeholder='Enter title' value={value} onChange={onChange} />
		</div>
	);
};

export default Title;
