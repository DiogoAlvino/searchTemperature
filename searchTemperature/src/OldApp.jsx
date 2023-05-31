import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import './css/app.css'
import { timezoneCity } from './api/script'
import { temperatureCity } from './api/script'
import { findTimezoneByCity } from './api/script'
import { setPhrase } from './functions'

function App() {

  const [city, setCity] = useState("");
  const [citySelected, setCitySelected] = useState("");

  const [timezoneSelected, setTimezoneSelected] = useState("");
  const [timezoneData, setTimezoneData] = useState(null);

  const [temperatureData, setTemperatureData] = useState(null);
  const [hours, setHours] = useState("");

  const [callAPI, setCallAPI] = useState(false);
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    if (callAPI) {
      const fetchDataTemperature = async () => {
        try {
          const response = await temperatureCity(city);
          setTemperatureData(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      const fetchDataTimezoneByCity = async () => {
        try {
          const response = await findTimezoneByCity(city);
          setTimezoneSelected(response.data.timezone);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDataTemperature();
      fetchDataTimezoneByCity();

      setCallAPI(false);
    }
  }, [city, callAPI]);

  useEffect(() => {
    if (timezoneSelected && temperatureData) {
      const fetchDataTimezone = async () => {
        try {
          const response = await timezoneCity(timezoneSelected);
          setTimezoneData(response.data);
          setHours(response.data.datetime.substr(11, 5));
          setSentence(setPhrase(hours));
        } catch (error) {
          console.log(error);
        }
      };

      fetchDataTimezone();
    }
  }, [timezoneSelected, temperatureData]);

  console.warn("search -> ", city)
  console.warn("timezoneselected -> ", timezoneSelected)
  console.warn("timezone -> ", timezoneData)
  console.warn("temperatura => ", temperatureData)

  return (
    <>
      <main>
        <header>
          <div className="container-grid">
            <form action="" onSubmit={searchSubmit => searchSubmit.preventDefault()}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                value={city}
                onChange={e => setCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setCallAPI(true);
                    setCitySelected(city);
                  }
                }}
              />
            </form>
          </div>
          <div className="container-flex">
            {hours ? (
              <>
                <div className='top'>
                  <BsFillSunFill />
                  <p>GOOD {sentence}, IT'S CURRENTLY</p>
                </div>
                <h1>{hours}</h1>
                <h2>IN {citySelected.toUpperCase()}, {temperatureData?.sys?.country}</h2>
              </>
            ) : null}
          </div>

        </header>
        {/* <div>teste</div> */}
      </main>
    </>
  )
}

export default App
