import { NAVIGATION_VIEW, CONTENT_VIEW, ERROR_OCCURRED, LANDING_PAGE } from './body-constants';
import * as ACTIONTYPES from './body-actions-type';

const initialState = {
  view: NAVIGATION_VIEW,
  listCount: 0,
  nav: { data: [], title: undefined, loading: false },
};

const contentBodyReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.SHOW_LANDING_PAGE:
    return {
      ...state,
      view: LANDING_PAGE,
      nav: { data: [], title: undefined, loading: false }
    };
  case ACTIONTYPES.SHOW_NAVIGATION_VIEW:
    return {
      ...state,
      view: NAVIGATION_VIEW
    };
  case ACTIONTYPES.FETCH_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        data: [],
        title: action.payload.title,
        loading: true
      }
    };
  case ACTIONTYPES.SET_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        ...action.payload,
      }
    };
  case ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA:
    return {
      ...state,
      nav: {
        data: [],
        title: ERROR_OCCURRED,
        loading: false
      }
    };
  case ACTIONTYPES.SHOW_CONTENT_VIEW:
    return {
      ...state,
      view: CONTENT_VIEW
    };
  case ACTIONTYPES.SET_LIST_COUNT:
    return {
      ...state,
      listCount: action.payload.count
    };
  default:
    return state;
  }
};

export default contentBodyReducer;