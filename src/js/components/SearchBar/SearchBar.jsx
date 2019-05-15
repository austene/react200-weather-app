import React from 'react';

import {
  fetchWeather,
} from './searchbarActions';

import AlertMessage from '../AlertMessage';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handlePresetBtnClick = this.handlePresetBtnClick.bind(this);
    this.handleAlertClick = this.handleAlertClick.bind(this);
  }

  handleSearchBarChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSearchBtnClick() {
    const { dispatch } = this.props;
    dispatch(fetchWeather(this.state.city));
    this.setState({ city: '' });
  }

  handlePresetBtnClick(event) {
    const { dispatch } = this.props;
    dispatch(fetchWeather(event.target.name));
  }

  handleAlertClick(value) {
    const { dispatch } = this.props;
    dispatch(dismissAlert(value));
  }

  render() {
    const { searchbarError } = this.props;
    return (
      <div>
        <div className='btn-group' role='group' aria-label='preset cities'>
          <button type='button' className='btn btn-primary' name='San Diego' onClick={ this.handlePresetBtnClick }>San Diego</button>
          <button type='button' className='btn btn-primary' name='New York' onClick={ this.handlePresetBtnClick }>New York</button>
          <button type='button' className='btn btn-primary' name='Washington' onClick={ this.handlePresetBtnClick }>Washington D.C.</button>
          <button type='button' className='btn btn-primary' name='London' onClick={ this.handlePresetBtnClick }>London</button>
          <button type='button' className='btn btn-primary' name='Tokyo' onClick={ this.handlePresetBtnClick }>Tokyo</button>
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
              value={ this.state.city }
              onChange={ this.handleSearchBarChange }
            />
            <div className='input-group-append'>
              <button
                type='button'
                className='btn btn-outline-secondary'
                id='searchbar-btn'
                onClick={ this.handleSearchBtnClick }
              >Go</button>
            </div>
          </div>
        </div>

        <AlertMessage />
      </div>
    );
  }
}

export default SearchBar;
