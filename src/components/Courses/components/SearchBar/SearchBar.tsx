import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import './SearchBar.css';

interface SearchBarProps {
	onSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleClick = () => {
		onSearch(searchValue);
	};

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<div>
			<Input
				placeholder='Enter course name...'
				value={searchValue}
				onChange={handleInputValue}
			/>
			<Button buttonText='Search' onClick={handleClick} className='button' />
		</div>
	);
};

export default SearchBar;
