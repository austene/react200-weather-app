import React from 'react';

import {
  dismissAlert
} from './alertmessageActions';

class AlertMessage extends React.Component {
  constructor(props) {
    super(props);

    this.handleAlertClick = this.handleAlertClick.bind(this);
  }

  handleAlertClick(value) {
    const { dispatch } = this.props;
    dispatch(dismissAlert(value));
  }

  render() {
    const { searchbarError } = this.props;
    return (
      <div>
        {!searchbarError
        ? (<div />)
        : (
          <div className='alert alert-warning alert-dismissible fade show' role='alert'>
            <strong>Woops!</strong>  Please enter a city.
            <button
              type='button'
              className='close'
              data-dismiss='alert'
              aria-label='Close'
              value='false'
              onClick={ this.handleAlertClick }
            >
              <span>&times;</span>
            </button>
          </div>
          )
        }
      </div>
    );
  }
}

export default AlertMessage;
