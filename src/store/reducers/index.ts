import { combineReducers } from '@reduxjs/toolkit';
import healtReducer from './healt_reducer';

const rootReducers = combineReducers({
  healt: healtReducer
});

export default rootReducers;
