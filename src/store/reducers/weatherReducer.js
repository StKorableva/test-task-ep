const INITIAL_STATE = { isFetching: false, weather: {}, error: '' };

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, isFetching: false, weather: action.weather, error: '' };
    case "START_FETCHING":
      return { ...state, isFetching: true };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
