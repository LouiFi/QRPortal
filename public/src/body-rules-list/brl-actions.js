import * as ACTIONTYPES from './brl-actions-type';
import * as resources from './brl-resources';

export const setFetchingState = ( query ) => {
  return {
    type: ACTIONTYPES.FETCH_LIST_DATA,
    payload: {
      query
    }
  };
};

const fetchError = ( query, err ) =>{
  return {
    type: ACTIONTYPES.FAILED_TO_FETCH_LIST_DATA,
    payload: {
      query,
      err
    }
  };
};

const setListData = ( query, data ) => {
  return {
    type: ACTIONTYPES.SET_LIST_DATA,
    payload: {
      query,
      data
    }
  };
};

export const setSelected = ( itemRef ) => {
  return {
    type: ACTIONTYPES.SET_SELECTED_RULE_LIST_ITEM,
    payload: {
      itemRef
    }
  };
};

export const clearListData = () => {
  return {
    type: ACTIONTYPES.CLEAR_LIST_DATA,
  };
};

export const fetchListData = ( query, fetchfunc ) => {
  return (dispatch) => {
    dispatch(setFetchingState( query ));
    return fetchfunc( query ).then(
      data => dispatch(setListData( query, data )),
      err => dispatch(fetchError(query, err))
    );
  };
};

export const fetchApiData = ( query ) => fetchListData( query, resources.fetchData );
// export const fetchTechnologiesData = ( query ) => fetchListData( query, resources.fetchTechnologiesList );
// export const fetchExtensionsList = ( query ) => fetchListData( query, resources.fetchExtensionsList );
export const fetchBusinessCriteriaList = ( query ) => fetchListData( query, resources.fetchBusinessCriteriaList );