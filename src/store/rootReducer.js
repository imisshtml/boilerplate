import {combineReducers} from 'redux';
import baseReducer from './base/reducer';

const rootReducer = combineReducers({
  base: baseReducer,
});

export default rootReducer;
