import React from 'react';

class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchbarItems } = this.props;
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>
          City Information
        </div>
        <div className='card-body text-center'>
          <img src={ `https://openweathermap.org/img/w/${searchbarItems.weatherIcon}.png` } alt='' className='img-weather' />
          <span><h3>{ searchbarItems.location }</h3></span>
          <p>Lat/Long: { searchbarItems.latitude }, {searchbarItems.longitude }</p>
          <hr />
          <div className='row'>
            <div className='col-12 col-md-4 font-weight-bold'>
              <p>Temperature (F)</p>
              <p className='text-success'>{ searchbarItems.temperature }F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Pressure</p>
              <p className='text-success'>{ searchbarItems.pressure }</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Humidity</p>
              <p className='text-success'>{ searchbarItems.humidity }%</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Lowest Temp (F)</p>
              <p className='text-success'>{ searchbarItems.lowestTemp }F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Highest Temp (F)</p>
              <p className='text-success'>{ searchbarItems.highestTemp }F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Wind Speed</p>
              <p className='text-success'>{ searchbarItems.windSpeed }mph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;
