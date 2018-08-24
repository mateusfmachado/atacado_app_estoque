import { combineReducers } from 'redux';
import commonReducer from './common';

const rootReducer = combineReducers({
    common: commonReducer
})

export default rootReducer;