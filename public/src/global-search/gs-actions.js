import { FETCHSEARCHRESULTS } from './gs-resources';
import { SET_QUALITY_RULES_SEARCH_RESULTS, 
  ERROR_WHILE_FETCHING_SEARCH_RESULTS, 
  CLEAR_SEARCH_RESULTS, 
  DISPLAY_QUALITY_RULES_SEARCH_RESULTS, 
  HIDE_QUALITY_RULES_SEARCH_RESULTS, SET_SELECTED_SEARCH_RESULT} from './gs-actions-type';

import { setFetchingState } from 'body-rules-list/brl-actions';

export const setSelectedSearchResult = ( itemRef ) => {
  return {
    type: SET_SELECTED_SEARCH_RESULT,
    payload: {
      itemRef
    }
  };
};

const setSearchResults = ( data, query ) => {
  return {
    type: SET_QUALITY_RULES_SEARCH_RESULTS,
    payload: {
      results: data,
      query: query
    }
  };
};

const errorHandler = ( err, query ) => {
  return {
    type: ERROR_WHILE_FETCHING_SEARCH_RESULTS,
    payload: {
      error: err,
      query: query
    }
  };
};

export const fetchSearchResults = ( query ) => {
  return function (dispatch) {
    dispatch(setFetchingState());
    return FETCHSEARCHRESULTS(query).then(
      data => dispatch(setSearchResults(data, query)),
      err => dispatch(errorHandler(err, query))
    );
  };
};

export const hideSearchResults = () => {
  return { type: HIDE_QUALITY_RULES_SEARCH_RESULTS };
};

export const displaySearchResults = () => {
  return { type: DISPLAY_QUALITY_RULES_SEARCH_RESULTS };
};

export const clearSearchResults = () => {
  return { type: CLEAR_SEARCH_RESULTS };
};