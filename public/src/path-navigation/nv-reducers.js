import { APPEND_PATH_TO_HEADER, SET_PATH_TO_HEADER, GOTO_POINT_IN_HEADER_PATH } from './nv-actions-type';
import { RETURN_TO_LANDING_PAGE } from '../view-navigation/vn-actions-type';

const initialState = {
  path: [],
};

const navHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
  case APPEND_PATH_TO_HEADER:
    return {
      ...state,
      path: [...state.path, action.payload]
    };
  case SET_PATH_TO_HEADER:
    return {
      ...state,
      path: [...action.payload]
    };
  case GOTO_POINT_IN_HEADER_PATH:
    return {
      ...state,
      path: state.path.slice(0, action.payload.index + 1 )
    };
  case RETURN_TO_LANDING_PAGE:
    return {
      path: []
    };
  default:
    return state;
  }
};

export default navHeaderReducer;