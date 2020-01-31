import {combineReducers} from 'redux';

import OrdersReducer from './HistoryOrdersReducer';
import FormReducer from './HistoryFormReducer';

export default combineReducers({
    orders: OrdersReducer,
    form: FormReducer
});