import { combineReducers } from 'redux';
import SystemsReducer from './reducer_systems'

const rootReducer = combineReducers({
  systems: SystemsReducer
});

export default rootReducer;
