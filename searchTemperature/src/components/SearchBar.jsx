import React, { useState, useEffect } from 'react';

const SearchBar = ({ city, setCity, setSelectCity }) => {
  const [searchValue, setSearchValue] = useState(city);

  const formSubmit = e => {
    e.preventDefault();
    setCity(searchValue);
    setSelectCity(searchValue);
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      formSubmit(e);
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search any city"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
};

export default SearchBar;
