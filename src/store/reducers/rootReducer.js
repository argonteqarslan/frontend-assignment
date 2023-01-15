import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ 
    todos: taskReducer,
    auth: authReducer
})

export default rootReducer;