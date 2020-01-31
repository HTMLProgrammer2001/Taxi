import * as ACTIONS from 'js/actions';

let initialState = {
    val: [],
    loading: false,
    error: null
};

function OrdReducer(state = initialState, action){
    switch (action.type) {
        case ACTIONS.ORDERS_LOAD_START:
            return {...state, loading: true};

        case ACTIONS.ORDERS_LOAD_SUCCESS:
            return {...state, val: action.payload, loading: false};

        case ACTIONS.ORDERS_LOAD_FAIL:
            return {...state, error: action.error, loading: false};
    }

    return state;
}

export default OrdReducer;