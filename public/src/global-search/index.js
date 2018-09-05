import { connect } from 'react-redux';
import Model from './gs-model';
import * as actions from './gs-actions';
import * as bodyActions from 'body/body-actions';
import { setHeaderPath } from 'path-navigation/nv-actions';
import { clearDetailsData } from 'details-section/ds-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    language: state.language.language
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchSearchResults: ( query ) => {
      dispatch(bodyActions.setListCount(1));
      dispatch(bodyActions.showContentView());
      dispatch(actions.fetchSearchResults( query ));
      dispatch(actions.displaySearchResults());
      dispatch(clearDetailsData());
      dispatch(setHeaderPath({name: 'Search Results: ' + query}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);