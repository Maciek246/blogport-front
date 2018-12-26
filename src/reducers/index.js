import { combineReducers } from 'redux';
import {reducer as userReducer} from './userReducer';
import {reducer as blogReducer} from './blogReducer';

export default combineReducers({user: userReducer, blog: blogReducer});