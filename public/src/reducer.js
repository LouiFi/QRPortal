import { combineReducers } from 'redux';
import viewTypeReducer from 'view-navigation/vn-reducers';
import mktReducers from 'marketing/mkt-reducers';
import pathNavigationReducers from 'path-navigation/nv-reducers';
import languageReducer from 'language/lang-reducers';
import globalSearchReducer from 'global-search/gs-reducers';
import MenuNavigationReducers from 'menu-navigation/mn-reducers';
import contentBodyReducers from 'body/body-reducers';
import ruleDetailsReducers from 'details-section/ds-reducers';
import standardsListReducers from 'body-standards-list/bsl-reducers';
import RulesListReducers from 'body-rules-list/brl-reducers';

const rootReducer = combineReducers({
  viewType: viewTypeReducer,
  marketing: mktReducers,
  path: pathNavigationReducers,
  language: languageReducer,
  search: globalSearchReducer,
  navMenu: MenuNavigationReducers,
  contentBody: contentBodyReducers,
  ruleDetails: ruleDetailsReducers,
  standards: standardsListReducers,
  rulesList: RulesListReducers
});

export default rootReducer;