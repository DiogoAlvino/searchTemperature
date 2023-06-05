import React from 'react'
import SearchBar from './SearchBar'

const Header = ({city, setCity, setSelectCity, apiData}) => {
  return (
    <header className='container-flex'>
      <div className="clima">
        {apiData && (
          <>
            <p>{apiData.phrase}</p>
            <p>{apiData.temp}⁰C</p>
          </>
        )}
      </div>
      <SearchBar city={city} setCity={setCity} setSelectCity={setSelectCity} />
    </header>
  )
}

export default Header