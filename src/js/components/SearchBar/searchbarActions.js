const axios = require('axios');

export function dismissAlert() {
  return {
    type: 'DISMISS_ALERT',
  };
}
export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_PENDING' });
    axios.get(`/search/${city}`)
      .then((res) => {
        dispatch({ type: 'FETCH_WEATHER_FULFILLED', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: err });
      });
  };
};
