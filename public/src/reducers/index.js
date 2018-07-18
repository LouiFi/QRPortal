import { combineReducers } from 'redux';
import navBarReducer from './navBar';
import navItemsReducer from './navItems';
import contentBodyReducer from './contentBody';

const rootReducer = combineReducers({
  navBar: navBarReducer,
  navItems: navItemsReducer,
  content: contentBodyReducer
});

export default rootReducer;