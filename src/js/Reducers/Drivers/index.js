import {combineReducers} from 'redux';

import DriversFormReducer from './DriversFormReducer';
import DriversListReducer from './DriversListReducer';

export default combineReducers(
    {
        form: DriversFormReducer,
        list: DriversListReducer
    }
);