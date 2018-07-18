import { connect } from 'react-redux';
import ContentBody from '../components/contentBody';

const mapStateToProps = (state) => {
  return {
    arrayValues: state.content.array
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (data) => {
      console.log(data);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);