import {combineReducers} from 'redux';

import historyReducer from './History/';

export default combineReducers({
    history: historyReducer
});