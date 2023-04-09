import { combineReducers } from 'redux';
import { SET_API_DATA, SET_CURRENT_COMPANY } from '../actions';

export const INITIAL_STATE = {
  apiData: [],
  currentCompany: '',
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_API_DATA:
    return { ...state, apiData: action.payload };
  case SET_CURRENT_COMPANY:
    return { ...state, currentCompany: action.payload };
  default:
    return state;
  }
};

export const rootReducer = combineReducers({ apiReducer });
