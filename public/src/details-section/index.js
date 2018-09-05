import { connect } from 'react-redux';
import RulesDetails from './ds-model';

const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: ( val ) => {
      return console.log( val );
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.ruleDetails.data,
    loading: state.ruleDetails.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RulesDetails);