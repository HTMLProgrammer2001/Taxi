import * as ACTIONS from 'js/actions';

let initialState = {
    val: [],
    loading: false,
    error: null
};

function OrdReducer(state = initialState, action){
    let orderIndex,
        orders;

    switch (action.type) {
        case ACTIONS.ORDERS_LOAD_START:
            return {...state, loading: true};

        case ACTIONS.ORDERS_LOAD_SUCCESS:
            return {...state, val: action.payload, loading: false};

        case ACTIONS.ORDERS_LOAD_FAIL:
            return {...state, error: action.error, loading: false};

        case ACTIONS.ORDER_CHANGE:
            orderIndex = state.val.findIndex( (ord) => {
                return ord.orderID === action.payload.orderID;
            });

            if(orderIndex < 0)
                return state;

            orders = state.val.slice();
            orders[orderIndex] = {...action.payload};

            return {...state, val: orders};

        case ACTIONS.ORDER_ADD:
            orders =  state.val.slice();
            orderIndex = orders.findIndex( (ord) => {
                return ord.orderID === action.payload.orderID;
            } );

            //order already exist
            if(orderIndex >= 0)
                return state;

            orders.push(action.payload);

            return {...state, val: orders};

        case ACTIONS.ORDER_REMOVE:
            orders = state.val.slice();

            orders = orders.filter( (e) => {
                return e.orderID !== action.payload;
            } );

            return {...state, val: orders};
    }

    return state;
}

export default OrdReducer;