import React from 'react';
import PropTypes from 'prop-types';
import VerticalArray from 'components/array/';
import { compareFunction } from './brl-lib';
import { HEADERS, NORULES, FILTERPLACEHOLDER, RULES } from './brl-constants';

const RulesListArray = ( props ) => {
  const hasSearchResults = props.searchResults ? true : false,
    searchResultsLength = hasSearchResults ? props.searchResults.length : 0,
    searchResults = searchResultsLength > 0 ? props.searchResults : [];

  const childConstructor = props.searchVisible ? props.SearchArrayChildConstructor : props.arrayChildConstructor,
    Headers = props.searchVisible ? [HEADERS.id, HEADERS.name, HEADERS.technologies, HEADERS.critical] : [HEADERS.id, HEADERS.name, HEADERS.critical];

  return(
    <VerticalArray isLoading={props.loading} 
      childConstructor={childConstructor} 
      filterPlaceholder={FILTERPLACEHOLDER} 
      itemCountTitle={RULES} 
      onEmpty={props.customMessage || NORULES} 
      headers={Headers} 
      compare={compareFunction}>
      { props.searchVisible ? searchResults : props.data}
    </VerticalArray>);
};

RulesListArray.propTypes = {
  searchVisible: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  arrayChildConstructor: PropTypes.func.isRequired,
  SearchArrayChildConstructor: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  customMessage: PropTypes.string
};

export default RulesListArray;