import * as ACTIONS from './actions';

//history orders
export function historyOrderLoad() {
    return {
      type: ACTIONS.ORDERS_LOAD_START
    };
}

export function historyOrderSuccess(payload) {
    return {
      type: ACTIONS.ORDERS_LOAD_SUCCESS,
      payload
    };
}

export function historyOrderFail(error) {
    return {
        type: ACTIONS.ORDERS_LOAD_FAIL,
        error
    };
}

//history filter
export function historyDriverChange(payload){
    return {
      type: ACTIONS.FILTER_DRIVER_CHANGE,
      payload
    };
}

export function historyDateStartChange(payload){
    return {
        type: ACTIONS.FILTER_STARTDATE_CHANGE,
        payload
    };
}

export function historyDateEndChange(payload){
    return {
        type: ACTIONS.FILTER_ENDDATE_CHANGE,
        payload
    };
}

export function historyStatusChange(payload){
    return {
        type: ACTIONS.FILTER_STATUS_CHANGE,
        payload
    };
}

export function historySortFieldChange(payload) {
    return {
      type: ACTIONS.SORT_FIELD_CHANGE,
      payload
    };
}

export function historySortDirectionChange(payload) {
    return {
        type: ACTIONS.SORT_DIRECTION_CHANGE,
        payload
    };
}