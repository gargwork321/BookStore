import {combineReducers} from 'redux';
import bookReducer from './Book/bookReducer';

const rootReducer = combineReducers({
    book: bookReducer
})

export default rootReducer;