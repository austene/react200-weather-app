import { connect } from 'react-redux';
import AlertMessage from './AlertMessage';

function mapStoreToProps(store) {
  return {
    searchbarError: store.searchbar.error
  };
}

export default connect(mapStoreToProps)(AlertMessage);
