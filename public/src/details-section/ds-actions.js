import * as ACTIONTYPES from './ds-actions-type';
import { apiFetch } from 'common/';

const fetchingDetailsData = () => {
  return {
    type: ACTIONTYPES.FETCHING_DETAILS_CONTENT_FROM_API
  };
};

const setDetailsData = ( data, query ) => {
  return {
    type: ACTIONTYPES.SET_CONTENT_DETAILS,
    payload: {
      data,
      query
    }
  };
};

const errorOnDetailsFetch = (err, query) => {
  return {
    type: ACTIONTYPES.ERROR_ON_DETAILS_FETCH,
    payload: {
      err,
      query
    }
  };
};

export const fetchDetailsData = ( url ) => {
  return (dispatch) => {
    dispatch(fetchingDetailsData());
    return apiFetch( url ).then(
      data => dispatch(setDetailsData(data, url)),
      err => dispatch(errorOnDetailsFetch(err, url))
    );
  };
};

export const clearDetailsData = () => {
  return {
    type: ACTIONTYPES.CLEAR_CONTENT_DETAILS
  };
};