import { WEATHER } from "../constants/action-types";

const initialState = {
  isLoading: true,
  isError: false
};

function rootReducer(state = initialState, action) {
  if (action.type === WEATHER.GET_WEATHER) {
    return {
      //...state,
      isLoading: true,
      isError: false
    }
  }
  if (action.type === WEATHER.GET_WEATHER_SUCCES) {
    return {
      ...state,
      [action.cityName]: action.response,
      isLoading: false
    }
  }
  if (action.type === WEATHER.GET_WEATHER_FAILURE) {
    return {
      //...state,
      isLoading: false,
      isError: true
    }
  }

  return state;
}

export default rootReducer;