import axios from "axios";

export const findTimezoneByCity = (city) => {
    return axios.get(`https://api.api-ninjas.com/v1/timezone?city=${city}`, {
        headers:{
            "X-Api-Key": "6Jp5C63i0YloufC4swco9w==SBGJGyAi7QO0wzJ6"
        }
    });
}

export const timezoneCity = (timezoneCity) => {
    return axios.get(`http://worldtimeapi.org/api/timezone/${timezoneCity}`);
}

export const temperatureCity = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`);
}