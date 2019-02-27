import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import changePasswordReducer from './changePasswordReducer';

export default combineReducers({
    loginReducer,
    registerReducer,
    changePasswordReducer,
})