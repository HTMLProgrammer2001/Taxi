import * as ACTIONS from 'js/actions';

let initialState = {
    sortDir: 'ASC',
    search: ''
},
    driverFormReducer = (state = initialState, action) =>
    {
        switch (action.type) {
            case ACTIONS.DRIVERS_FILTER_NAME_CHANGE:
                return {...action, search: action.payload};

            case ACTIONS.DRIVERS_SORTDIR_CHANGE:
                return {...action, sortDir: action.payload};
        }

        return state;
    };

export default driverFormReducer;