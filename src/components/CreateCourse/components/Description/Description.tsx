import React from 'react';

import './Description.css';

interface DescriptionProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Description: React.FC<DescriptionProps> = ({ value, onChange }) => {
	return (
		<div>
			<h4>Description</h4>
			<textarea
				className='textarea'
				value={value}
				onChange={onChange}
				placeholder='Enter course description'
				rows={4}
			/>
		</div>
	);
};

export default Description;
