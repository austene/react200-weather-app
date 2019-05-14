import React from 'react';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>
          Search History
        </div>
        <div className='card-body'>
          <table className='table table-striped'>
            <tbody>
              {/* .map goes here */}
              <tr>
                <td>San Diego</td>
                <td className='text-right'><span>04/28/2017</span><br /><span>19:04:46</span></td>
              </tr>
              <tr>
                <td>New York</td>
                <td className='text-right'><span>04/29/2017</span><br /><span>20:01:13</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchHistory;
