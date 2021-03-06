import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    searchbarError: store.searchbar.error
  };
}

export default connect(mapStoreToProps)(SearchBar);
