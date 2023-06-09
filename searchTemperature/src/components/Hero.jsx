import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'

const Hero = ({currentTime, city, country, weatherPhrase}) => {
  return (
    <>
      <div className='top'>
        <BsFillSunFill />
        <p>GOOD {weatherPhrase}, IT'S CURRENTLY</p>
      </div>
      <h1>{currentTime}</h1>
      <h2>IN {city}, {country}</h2>
    </>
  )
}

export default Hero