import moment from 'moment';

const defaultState = {
  // searchbar: '',
  // city: '',
  location: '',
  latitude: 0,
  longitude: 0,
  description: '',
  weatherIcon: '',
  temperature: '',
  pressure: 0,
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  searchHistory: []
};

export default function SearchBarReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // case 'UPDATE_CITY_INPUT': {
    //   return {
    //     ...state,
    //     searchbar: payload.searchbar
    //   };
    // }
    
    // case ' FETCH_WEATHER_PENDING'

    case 'FETCH_WEATHER_FULFILLED': {
      console.log(`res is ${payload.res}`);
      return {
        ...state,
        location: payload.data.name,
        latitude: payload.data.coord.lat,
        longitude: payload.data.coord.lon,
        description: payload.data.weather[0].description,
        weatherIcon: payload.data.weather[0].icon,
        temperature: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        searchHistory: [
          ...state.searchHistory,
          // { payload.data.name }
          {
            location: payload.data.name,
            date: moment().format('l'),
            time: moment().format('LTS'),
            // time: moment().format('hh:mm:ss a')
          }
        ]
      };
    }

    // case 'FETCH_WEATHER_REJECTED'

    case 'SELECT_CITY': {
      return {
        ...state,
        searchbar: '',
        city: payload.searchbar
      };
    }

    default: {
      return state;
    }
  }
}
