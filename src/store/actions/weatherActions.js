import getWeatherApi from "../../service/serviceAPI";

export const setWeather = weather => ({
  type: "SET_WEATHER",
  weather
});

export const startFetching = () => ({
  type: "START_FETCHING"
});

export const resetFetching = () => ({
  type: "RESET_FETCHING"
});

export const setError = error => ({
  type: "SET_ERROR",
  error
});

export const getWeather = city => {
  return async (dispatch, getState) => {
    const { isFetching } = getState();

    if (isFetching) {
      return;
     }

    dispatch(startFetching()); 
    try {
      const weather = await getWeatherApi(city);
      dispatch(resetFetching());
      dispatch(setWeather(weather));
    } catch (error) {
      dispatch(resetFetching());
      dispatch(setError(error.message));
    }
  };
};
