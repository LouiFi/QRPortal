import { connect } from 'react-redux';
import ContentBody from './body-model';
import * as actions from './body-actions';

const mapStateToProps = (state) => {
  return {
    view: state.contentBody.view,
    navigation: state.contentBody.nav,
    listCount: state.contentBody.listCount,
    viewType: state.viewType.viewType,
    searchVisible: state.search.resultsVisible,
    searchResults: state.search.results
  };
};

export default connect(mapStateToProps)(ContentBody);