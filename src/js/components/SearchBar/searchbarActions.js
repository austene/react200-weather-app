import axios from 'axios';

// export function getWeather() {
//   return {
//     type: 'GET_WEATHER',
//     payload: new Promise()
//   }
// }

export const fetchWeather = (city) => {
  return (dispatch) => {
    console.log(`city is ${city}`);
    dispatch({ type: 'FETCH_WEATHER_PENDING' });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e31c9a46a3fe689fd81574f8f6b0c15&units=imperial`)
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY&units=imperial}`)
      .then((res) => {
        // console.log(`res is ${res}`);
        dispatch({ type: 'FETCH_WEATHER_FULFILLED', payload: res });
      })
      .catch((err) => {
        console.log(`err is ${err}`);
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

// export function updateCityInput(searchbar) {
//   return {
//     type: 'UPDATE_CITY_INPUT',
//     payload: { searchbar }
//   };
// }

// export function selectCity(searchbar) {
//   return {
//     type: 'SELECT_CITY',
//     payload: { searchbar }
//   };
// }
