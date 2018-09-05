import * as ACTIONTYPES from './body-actions-type';
import { apiFetch } from 'common/';
import { STATIC_QUERIES, fetchExtensionsList, fetchTechnologiesList, fetchQualityStandardList, fetchBusinessCriteriaList } from './body-resources';
import { TECHNOLOGIES, EXTENSIONS } from './body-constants';

const errOnDataFetch = (err, actionType , query) => {
  return {
    type: actionType,
    payload: {
      err: err,
      query: query
    }
  };
};

export const fetchingData = ( actionType, params ) => {
  return {
    type: actionType,
    payload: {
      ...params
    }
  };
};

export const showContentView = () => {
  return {
    type: ACTIONTYPES.SHOW_CONTENT_VIEW
  };
};

export const showNavigationView = () => {
  return {
    type: ACTIONTYPES.SHOW_NAVIGATION_VIEW
  };
};

export const showLandingPage = () => {
  return {
    type: ACTIONTYPES.SHOW_LANDING_PAGE
  };
};

export const setListCount = ( count ) => {
  return {
    type: ACTIONTYPES.SET_LIST_COUNT,
    payload: {
      count: count
    }
  };
};

const setListData = ( data ) => {
  return {
    type: ACTIONTYPES.SET_LIST_DATA,
    payload: {
      data: data,
      loading: false
    }
  };
};

export const fetchListData = ( query ) =>{
  return ( dispatch ) => {
    dispatch(fetchingData(ACTIONTYPES.FETCH_LIST_DATA));
    return apiFetch(query).then(
      data => dispatch(setListData( data )),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_LIST_DATA, query))
    );
  };
};

const setExpandedListData = ( data ) => {
  return {
    type: ACTIONTYPES.SET_EXPANDED_LIST_DATA,
    payload: {
      data: data,
      loading: false
    }
  };
};

export const fetchExpandedListData = ( query ) => {
  return ( dispatch ) => {
    dispatch(fetchingData(ACTIONTYPES.FETCH_EXPANDED_LIST_DATA));
    return fetchBusinessCriteriaList( query ).then(
      data => dispatch( setExpandedListData(data) ),
      err => dispatch( errOnDataFetch( err, ACTIONTYPES.FAILED_TO_FETCH_EXPANDED_LIST_DATA, query ))
    );
  };
};

const setNavigationData = ( title, data ) => {
  return {
    type: ACTIONTYPES.SET_NAVIGATION_DATA,
    payload: {
      data: data,
      title: title,
      loading: false
    }
  };
};

export const fetchNavigationData = ( query, title ) => {
  return ( dispatch ) => {
    dispatch(fetchingData( ACTIONTYPES.FETCH_NAVIGATION_DATA, {title} ));
    return apiFetch( query ).then(
      data => dispatch(setNavigationData(title, data)),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA, query))
    );
  };
};

export const fetchTechnologyNavigationData = () => {
  return ( dispatch ) => {
    dispatch(fetchingData( ACTIONTYPES.FETCH_NAVIGATION_DATA, {title: TECHNOLOGIES} ));
    return fetchTechnologiesList().then(
      data => dispatch(setNavigationData(TECHNOLOGIES, data)),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA, STATIC_QUERIES.technologies))
    );
  };
};

export const fetchExtensionsNavigationData = () => {
  return ( dispatch ) => {
    dispatch(fetchingData( ACTIONTYPES.FETCH_NAVIGATION_DATA, {title: EXTENSIONS} ));
    return fetchExtensionsList().then(
      data => dispatch(setNavigationData(EXTENSIONS, data)),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_NAVIGATION_DATA, STATIC_QUERIES.sources))
    );
  };
};

export const fetchQualityStandardsListData = ( url ) => {
  return ( dispatch ) => {
    dispatch(fetchingData(ACTIONTYPES.FETCH_LIST_DATA));
    return fetchQualityStandardList(url).then(
      data => dispatch(setExpandedListData( data )),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_LIST_DATA, url))
    );
  };
};

export const fetchBusinessCriteriaListData = ( url ) => {
  return ( dispatch ) => {
    dispatch(fetchingData(ACTIONTYPES.FETCH_LIST_DATA));
    return fetchBusinessCriteriaList(url).then(
      data => dispatch(setListData( data )),
      err => dispatch(errOnDataFetch(err, ACTIONTYPES.FAILED_TO_FETCH_LIST_DATA, url))
    );
  };
};

export const clearListData = () =>{
  return {
    type: ACTIONTYPES.CLEAR_LIST_DATA
  };
};