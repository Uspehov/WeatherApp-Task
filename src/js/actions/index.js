import { WEATHER } from "../constants/action-types";

export function getWeather(payload) {
  return { type: WEATHER.GET_WEATHER, payload };
}

export function setWeather(cityName, response) {
  return { type: WEATHER.GET_WEATHER_SUCCES, cityName, response };
}

export function failure() {
  return { type: WEATHER.GET_WEATHER_FAILURE };
}
