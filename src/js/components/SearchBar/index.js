import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    // searchbar: store.searchbar.searchbar
  };
}

export default connect(mapStoreToProps)(SearchBar);
