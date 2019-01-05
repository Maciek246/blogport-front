import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/userActions';

const initialState = {
    username: '',
    token: '',
    emaill: '',
    loading: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            return state;
        case LOGIN_SUCCESS:
            return state;
        case LOGIN_FAIL:
            return state;
        case LOGOUT:
            return state;
        default:
            return state;
    }
}