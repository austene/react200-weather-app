const defaultState = {
  searchbar: '',
  city: '',
  temperature: '',
  pressure: 0,
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  searchHistory: []
};

export default function SearchBarReducer (state = defaultState, action) {
  const { type, payload } = action

  switch(type) {
    case 'UPDATE_CITY_INPUT': {
      return {
        ...state,
        searchbar: payload.searchbar
      };
    }

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
