import React, { useState } from 'react';

import Input from '../../../../common/Input/Input';

import './Duration.css';

interface DurationProps {
	value: number;
	onSubmit: (duration: number) => void;
}

const Duration: React.FC<DurationProps> = ({
	value,
	onSubmit,
}: DurationProps) => {
	const [inputValue, setInputValue] = useState('');

	const formatDuration = (duration: number) => {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;
		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')} hours`;
	};

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const duration = parseInt(event.target.value, 10);
		setInputValue(event.target.value);
		onSubmit(duration);
	};

	return (
		<div className='duration-a'>
			<h4>Duration</h4>
			<p>Enter duration in minutes:</p>
			<Input
				placeholder='Enter duration in minutes...'
				value={inputValue}
				onChange={handleInputValue}
			/>
			<p className='added-duration'>
				Duration: {formatDuration(Number(inputValue))}
			</p>
		</div>
	);
};

export default Duration;
