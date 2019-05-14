import React from 'react';
import SearchBar from './components/SearchBar';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
          <p className='mb-4'>Always know if you'll need an umbrella!</p>
        </div>

        <div className='row'>
          <div className='col-12 mb-4'>
            <SearchBar />
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo />
          </div>

          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
