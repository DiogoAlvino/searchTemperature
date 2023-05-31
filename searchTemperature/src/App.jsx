import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import './css/app.css'


function App() {
  const [city, setCity] = useState('Marabá');
  const [selectCity, setSelectCity] = useState('Marabá');
  const [phrase, setPhrase] = useState('');
  const [temp, setTemp] = useState('');
  // inicio do get time
  const [currentTime, setCurrentTime] = useState('00:00');
  useEffect(() => {
    axios.get(`https://api.api-ninjas.com/v1/worldtime?city=${city}`, {
      headers: {
        "X-Api-Key": "6Jp5C63i0YloufC4swco9w==SBGJGyAi7QO0wzJ6"
      }
    })
      .then(response => {
        setCurrentTime(response.data.datetime.substr(11, 5))
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }, [selectCity]);
  // fim do get time

  // inicio do get weather
  const [country, setCountry] = useState('')
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`)
      .then(response => {
        setCountry(response.data.sys.country)
        setPhrase(response.data.weather[0].description)
        setTemp(response.data.main.temp)
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [selectCity])
  // fim do get weather

  return (
    <>
      <main>
        <header className='container-flex'>
          <div className="clima">
            <p>{phrase}</p>
            <p>{temp}⁰C</p>
          </div>
          <SearchBar city={city} setCity={setCity} setSelectCity={setSelectCity} />
        </header>
        <div className="container-flex">
          <Hero currentTime={currentTime} city={selectCity.toUpperCase()} country={country} />
        </div>
      </main>
    </>
  )
}

export default App;
