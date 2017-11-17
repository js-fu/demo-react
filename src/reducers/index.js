import { combineReducers } from 'redux';

import todoAppReducer from './todoAppReducer';

let rootReducers = combineReducers({
  todoAppReducer,
});

export default rootReducers;