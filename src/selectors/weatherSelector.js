import { createSelector } from "reselect";

// TODO: use tranform in component
const weatherSelector = state => state.weather;

const transformToC = (temp) => {
	return (temp - 273.15).toFixed(1);
  }

const selectWeather = weather => {
  if (!weather.name) {
    return {
      city: "",
      temp: ""
    };
  }
  return {
    city: weather.name,
    temp: transformToC(weather.main.temp) + ' ℃'
  };
};

export default createSelector(weatherSelector, selectWeather);
