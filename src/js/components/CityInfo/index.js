import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    searchbarItems: store.searchbar
  };
}

export default connect(mapStoreToProps)(CityInfo);
