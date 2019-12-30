import getWeatherApi from "../../service/serviceAPI";

export const setWeather = weather => ({
  type: 'SET_WEATHER',
  weather
})

export const startLoading = () => ({
  type: 'START_LOADING'
})

export const resetLoading = () => ({
  type: 'RESET_LOADING'
})

export const setError = error => ({
  type: 'SET_ERROR',
  error
})

export const getWeather = city => {
  return async dispatch => {
    dispatch(startLoading());
    try {
      const weather = await getWeatherApi(city);
      if(weather.cod !== 200) {
        throw new Error(weather.message)
      }
      dispatch(resetLoading());
      dispatch(setWeather(weather));
    }
    catch(error) {
      dispatch(resetLoading());
      dispatch(setError(error.message));
    }
  }
}