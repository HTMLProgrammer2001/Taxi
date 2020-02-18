import {combineReducers} from 'redux';

import historyReducer from './History/';
import driverReducer from './Drivers/';

export default combineReducers({
    history: historyReducer,
    drivers: driverReducer
});