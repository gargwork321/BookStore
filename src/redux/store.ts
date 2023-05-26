
import {createStore, combineReducers} from 'redux';

import rootReducer from './Reducers';

const bookStore = createStore(rootReducer);

export default bookStore;

