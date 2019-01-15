import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/userActions';

const initialState = {
    username: '',
    token: '',
    email: '',
    loading: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.user.username,
                token: action.payload.user.token,
                email: action.payload.user.email,
                loading: false,
                error: null
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            };
        case LOGOUT:
            return {
                ...state,
                username: "",
                token: "",
                email: "",
                error: null
            };
        case REGISTER:
            return {
                ...state,
                loading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.message
            };
        default:
            return state;
    }
}