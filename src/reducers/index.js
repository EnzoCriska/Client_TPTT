import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import changePasswordReducer from './changePasswordReducer';
import loadInfoReducer from './loadInfoReducer'

export default combineReducers({
    loginReducer,
    registerReducer,
    changePasswordReducer,
    loadInfoReducer
})