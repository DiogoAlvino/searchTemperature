import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Hero from './components/Hero';
import './css/app.css';
import London from './assets/london.webp'
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
        <img src={London} alt="city view" className='bg-image' />
        <Header city={city} setCity={setCity} setSelectCity={setSelectCity} apiData={apiData} />
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
