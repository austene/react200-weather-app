import moment from 'moment';

const defaultState = {
  // searchbar: '',
  // city: '',
  location: '',
  latitude: 0,
  longitude: 0,
  description: '',
  weatherIcon: '01d',
  temperature: '',
  pressure: 0,
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  searchHistory: [],
  error: false
};

export default function SearchBarReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'FETCH_WEATHER_FULFILLED': {
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
          {
            location: payload.data.name,
            date: moment().format('l'),
            time: moment().format('LTS'),
          }
        ]
      };
    }

    case 'FETCH_WEATHER_REJECTED': {
      return {
        ...state,
        error: true
      };
    }

    case 'DISMISS_ALERT': {
      return {
        ...state,
        error: false
      };
    }

    default: {
      return state;
    }
  }
}
