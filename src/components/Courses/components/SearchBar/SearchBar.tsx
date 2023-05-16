import React, { useState } from 'react';
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

import "./SearchBar.css"


const SearchBar: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleClick = () => {
        console.log( searchValue);
	};

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div>
            <Input  placeholder='Enter course name...' value={searchValue} onChange={handleInputValue}/>
            <Button buttonText='Search' onClick={handleClick} />
        </div>
    )
}

export default SearchBar;