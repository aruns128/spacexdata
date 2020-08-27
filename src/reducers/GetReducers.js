import * as actions from './../actions/Constants';

let initialState = {history: [],address:[]};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case actions.GET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state
    }
}
