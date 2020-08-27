import { combineReducers } from 'redux';
import GetData from './GetReducers';

const appReducer = combineReducers({
    GetData
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;
