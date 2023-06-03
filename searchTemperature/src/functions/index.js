import { useState, useEffect } from "react";
import axios from "axios";

export const setPhrase = (hours) => {
  const parsedHours = parseInt(hours.substr(0, 2));

  if (parsedHours <= 12) {
    return "MORNING";
  } else if (parsedHours < 18) {
    return "AFTERNOON";
  } else {
    return "NIGHT";
  }
};


const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const callApi = (city, selectCity) => {
  return new Promise((resolve, reject) => {
    const weatherPromise = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`
    );
    const timePromise = axios.get(
      `https://api.api-ninjas.com/v1/worldtime?city=${city}`,
      {
        headers: {
          "X-Api-Key": "6Jp5C63i0YloufC4swco9w==SBGJGyAi7QO0wzJ6"
        }
      }
    );

    Promise.all([weatherPromise, timePromise])
      .then(([weatherResponse, timeResponse]) => {
        const weatherData = weatherResponse.data;
        const timeData = timeResponse.data;

        const weatherPhrase = capitalizeFirstLetter(weatherData.weather[0].description);
        const temp = weatherData.main.temp;
        const currentTime = timeData.datetime.substr(11, 5);
        const country = weatherData.sys.country;

        const dataResponse = {
          phrase: weatherPhrase,
          temp,
          currentTime,
          country
        };

        resolve(dataResponse);
      })
      .catch(error => {
        reject(error);
      });
  });
};