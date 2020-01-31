import * as ACTIONS from 'js/actions';

let initialState = {
    driver: '',
    status: '',
    dateStart: 0,
    dateEnd: +new Date()
};

function FormReducer(state = initialState, action){
    switch(action.type){
        case ACTIONS.FILTER_DRIVER_CHANGE:
            return {...state, driver: action.payload};

        case ACTIONS.FILTER_STARTDATE_CHANGE:
            return {...state, dateStart: action.payload};

        case ACTIONS.FILTER_ENDDATE_CHANGE:
            return {...state, dateEnd: action.payload};

        case ACTIONS.FILTER_STATUS_CHANGE:
            return {...state, status: action.payload};
    }

    return state;
}

export default FormReducer;