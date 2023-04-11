import { combineReducers } from 'redux';
import { NEXT_PERSON, PREVIOUS_PERSON, FIRST_PERSON, LAST_PERSON } from '../actions';

export const INITIAL_STATE = {
  currentPerson: 0,
};

const setCurrentPerson = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEXT_PERSON:
    return { ...state, currentPerson: action.payload };
  case PREVIOUS_PERSON:
    return { ...state, currentPerson: action.payload };
  case FIRST_PERSON:
    return { ...state, currentPerson: action.payload };
  case LAST_PERSON:
    return { ...state, currentPerson: action.payload };
  default:
    return state;
  }
};

export const rootReducer = combineReducers({ setCurrentPerson });
