import React from 'react';

import {
  updateCityInput,
  selectCity,
} from './searchbarActions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleSearchBarButton = this.handleSearchBarButton.bind(this);
  }

  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityInput(value));
  }

  handleSearchBarButton() {
    const { searchbar, dispatch } = this.props;
    dispatch(selectCity(searchbar));
  }

  render() {
    const { searchbar } = this.props;
    return (
      <div>
        <div className='btn-group' role='group' aria-label='preset cities'>
          <button type='button' className='btn btn-primary'>San Diego</button>
          <button type='button' className='btn btn-primary'>New York</button>
          <button type='button' className='btn btn-primary'>Washington D.C.</button>
          <button type='button' className='btn btn-primary'>London</button>
          <button type='button' className='btn btn-primary'>Tokyo</button>
        </div>

        <div className='form-group'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              id='searchbar'
              placeholder='Search for a city'
              aria-label='search for a city'
              aria-describedby='city searchbar'
              value={ searchbar }
              onChange={ this.handleCityInput }
            />
            <div className='input-group-append'>
              <button
                type='button'
                className='btn btn-outline-secondary'
                id='searchbar-btn'
                onClick={ this.handleSearchBarButton }
              >Go</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
