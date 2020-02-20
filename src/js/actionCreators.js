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

export function historyOrderAdd(payload) {
    return {
        type: ACTIONS.ORDER_ADD,
        payload
    };
}

export function historyOrderChange(payload) {
    return {
        type: ACTIONS.ORDER_CHANGE,
        payload
    };
}

export function historyOrderRemove(orderID) {
    return {
        type: ACTIONS.ORDER_REMOVE,
        payload: orderID
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

//driver filter
export function driverSortDirectionChange(payload) {
    return {
        type: ACTIONS.DRIVERS_SORTDIR_CHANGE,
        payload
    };
}

export function driverSearchChange(payload) {
    return {
        type: ACTIONS.DRIVERS_FILTER_NAME_CHANGE,
        payload
    };
}


//drivers
export function driverLoad() {
    return {
        type: ACTIONS.DRIVER_LOAD_START
    };
}

export function driverSuccess(payload) {
    return {
        type: ACTIONS.DRIVER_LOAD_SUCCESS,
        payload
    };
}

export function driverFail(error) {
    return {
        type: ACTIONS.DRIVER_LOAD_FAILED,
        error
    };
}


export function driverAdd(payload) {
    return {
        type: ACTIONS.DRIVER_ADD,
        payload
    };
}

export function driverChange(payload) {
    return {
        type: ACTIONS.DRIVER_CHANGE,
        payload
    };
}

export function driverRemove(payload) {
    return {
        type: ACTIONS.DRIVER_REMOVE,
        payload
    };
}