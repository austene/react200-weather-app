import React from 'react';

class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>
          City Information
        </div>
        <div className='card-body text-center'>
          <img src='xxx' alt='xxx' className='img-weather' />
          <span><h3>San Diego</h3></span>
          <p>Lat/Long: xxxx</p>
          <hr />
          <div className='row'>
            <div className='col-12 col-md-4 font-weight-bold'>
              <p>Temperature (F)</p>
              <p className='text-success'>65.62F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Pressure</p>
              <p className='text-success'>997</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Humidity</p>
              <p className='text-success'>39%</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Lowest Temp (F)</p>
              <p className='text-success'>62.01F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Highest Temp (F)</p>
              <p className='text-success'>71.01F</p>
            </div>
            <div className='col-12 col-md-4  font-weight-bold'>
              <p>Wind Speed</p>
              <p className='text-success'>24.16mph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;
