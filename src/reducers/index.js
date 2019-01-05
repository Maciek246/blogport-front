import { combineReducers } from 'redux';
import {reducer as userReducer} from './userReducer';
import {reducer as blogReducer} from './blogReducer';
import {reducer as applicationReducer} from './applicationReducer';

export default combineReducers({user: userReducer, blog: blogReducer, app: applicationReducer});