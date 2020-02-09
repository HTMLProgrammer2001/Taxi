import * as ACTIONS from 'js/actions';

let initialState = {
    driver: '',
    status: '',
    dateStart: null,
    dateEnd: null,
    sortBy: 'orderCreate',
    sortDir: 'ASC'
};

function FormReducer(state = initialState, action){
    switch(action.type){
        case ACTIONS.FILTER_DRIVER_CHANGE:
            return {...state, driver: action.payload};

        case ACTIONS.FILTER_STARTDATE_CHANGE:
            return {...state, dateStart: action.payload};

        case ACTIONS.FILTER_ENDDATE_CHANGE:
            return {...state, dateEnd:  action.payload};

        case ACTIONS.FILTER_STATUS_CHANGE:
            return {...state, status: action.payload};

        case ACTIONS.SORT_FIELD_CHANGE:
            return {...state, sortBy: action.payload};

        case ACTIONS.SORT_DIRECTION_CHANGE:
            return {...state, sortDir: action.payload};
    }

    return state;
}

export default FormReducer;