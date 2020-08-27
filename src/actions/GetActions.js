import { getService } from "./../services/GetServices";
import * as actions from "./Constants";

const getHistory = () => dispatch => {
    getService.getHistory().then(history => {
        dispatch({
            type: actions.GET_HISTORY,
            payload: history.data
        });
    }).catch(err => {
            alert(err.message)
        })
};

const getAddress = () => dispatch => {
    getService.getAddress().then(payload => {
        dispatch({
            type: actions.GET_ADDRESS,
            payload: payload.data
        });
    }).catch(err => {
            alert(err.message)
        })
};

export const getActions = {
    getHistory,
    getAddress
};
