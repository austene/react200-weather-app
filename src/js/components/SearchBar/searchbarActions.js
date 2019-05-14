import axios from "axios";

// export function getWeather() {
//   return {
//     type: 'GET_WEATHER',
//     payload: new Promise()
//   }
// }

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_PENDING' });
    // axios.get(api.openweathermap.org/data/2.5/weather?q={city}&APPID={process.env.WEATHER_API_KEY})
    axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e31c9a46a3fe689fd81574f8f6b0c15`)
      .then((res) => {
        dispatch({ type: 'FETCH_WEATHER_FULLFILLED', payload: res });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: err });
      });
  };
};

// {
//   type: 'FETCHWEATHER_PENDING'
// }

// {
//   type:  'FETCHWEATHER_FULFILLED'
//   payload: {
//     ...
//   }
// }

// {
//   type: 'FETCHWEATHER_REJECTED'
//   error: true,
//   payload: {
//     ...
//   }
// }

export function updateCityInput(searchbar) {
  return {
    type: 'UPDATE_CITY_INPUT',
    payload: { searchbar }
  };
}

export function selectCity(searchbar) {
  return {
    type: 'SELECT_CITY',
    payload: { searchbar }
  };
}
