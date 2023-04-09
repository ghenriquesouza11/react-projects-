import { legacy_createStore as createStore } from 'redux';
import { INITIAL_STATE, rootReducer } from '../reducers';

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
