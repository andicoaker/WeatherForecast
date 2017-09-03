import axios from 'axios';

const API_KEY = '4fd51d9b10d2d6e856393d25204437ae';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetchWeather action creator
// takes city as part of the search query
// using axios library to get ajax request and return a promise (request). promise is then passed into actions payload.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
