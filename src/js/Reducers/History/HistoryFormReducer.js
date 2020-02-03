import * as ACTIONS from 'js/actions';

let initialState = {
    driver: '',
    status: '',
    dateStart: 0,
    dateEnd: null,
    sortBy: 'orderCreate',
    sortDir: 'ASC'
};

function FormReducer(state = initialState, action){
    let res;
    switch(action.type){
        case ACTIONS.FILTER_DRIVER_CHANGE:
            return {...state, driver: action.payload};

        case ACTIONS.FILTER_STARTDATE_CHANGE:
            res = action.payload ? +Date.parse(action.payload) : 0;

            return {...state, dateStart: res};

        case ACTIONS.FILTER_ENDDATE_CHANGE:
            res = action.payload ? +Date.parse(action.payload) : Date.now();

            return {...state, dateEnd: res};

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