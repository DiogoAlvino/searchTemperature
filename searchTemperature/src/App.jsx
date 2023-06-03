import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import './css/app.css';
import { callApi } from './functions';
import { setPhrase } from './functions';

function App() {
  const [city, setCity] = useState('Marabá');
  const [selectCity, setSelectCity] = useState('Marabá');
  const [apiData, setApiData] = useState(null);
  const [timePhrase, setTimePhrase] = useState("");

  useEffect(() => {
    callApi(city, selectCity)
      .then(response => {
        setApiData(response);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [city, selectCity]);

  useEffect(() => {
    if (apiData && apiData.currentTime) {
      setTimePhrase(setPhrase(apiData.currentTime));
    }
  }, [apiData]);

  return (
    <>
      <main>
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
        <div className="container-flex">
          {apiData && (
            <Hero
              currentTime={apiData.currentTime}
              city={selectCity.toUpperCase()}
              country={apiData.country}
              weatherPhrase={timePhrase}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
