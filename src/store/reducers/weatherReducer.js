export function weatherReducer(state = {}, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, weather: action.weather, error: '' };
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "RESET_LOADING":
      return { ...state, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
