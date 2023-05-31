import React, { useState, useEffect } from 'react';

const SearchBar = ({ city, setCity, setSelectCity }) => {

  const formSubmit = e => {
    e.preventDefault()
    setSelectCity(city)
  }

  return (
    <form action="" onSubmit={formSubmit} >
      <div>
        {/* <label htmlFor="search">Search anyone city:</label> */}
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search any city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchBar;
