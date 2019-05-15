import React from 'react';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let id = 0;
    const { searchHistory } = this.props;
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>
          Search History
        </div>
        <div className='card-body'>
          <table className='table table-striped'>
            <tbody>
              { searchHistory.map(searchInstance => (
                <tr key={ ++id }>
                  <td>{ searchInstance.location }</td>
                  <td className='text-right'><span>{ searchInstance.date }</span><br /><span>{ searchInstance.time }</span></td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchHistory;
