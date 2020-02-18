import * as ACTIONS from 'js/actions';

let initialState = {
    val: [],
    error: null,
    loading: false
},

    driversReducer = (state = initialState, action) =>
    {
        let driverIndex, drivers;

        switch (action.type) {
            case ACTIONS.DRIVER_LOAD_START:
                return {...state, loading: true};

            case ACTIONS.DRIVER_LOAD_SUCCESS:
                return {...state, val: action.payload, loading: false};

            case ACTIONS.DRIVER_LOAD_FAIL:
                return {...state, error: action.error, loading: false};

            case ACTIONS.DRIVER_CHANGE:
                driverIndex = state.val.findIndex( (driver) => {
                    return driver.autoID === action.payload.autoID;
                });

                if(driverIndex < 0)
                    return state;

                drivers = state.val.slice();
                drivers[driverIndex] = {...action.payload};

                return {...state, val: drivers};

            case ACTIONS.DRIVER_ADD:
                drivers =  state.val.slice();
                driverIndex = drivers.findIndex( (driver) => {
                    return driver.autoID === action.payload.autoID;
                } );

                //order already exist
                if(driverIndex >= 0)
                    return state;

                drivers.push(action.payload);

                return {...state, val: drivers};

            case ACTIONS.DRIVER_REMOVE:
                drivers = state.val.slice();

                drivers = driver.filter( (driver) => {
                    return driver.autoID !== action.payload;
                } );

                return {...state, val: drivers};
        }

        return state;
    };

export default driversReducer;