const API_URL = 'http://localhost:8080';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGOUT = 'LOGOUT';

export function login(username, password){
    return dispatch => {
        dispatch({type: LOGIN});
        fetch(`${API_URL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                return res.json();
            }
            else return res.json().then(err => {throw new Error(err.message)});
        }).then(json => {
            dispatch({type: LOGIN_SUCCESS, payload: json})
        }).catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err})
        })
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}

export function register(username, password1, password2, email, first_name, last_name){
    return dispatch => {
        dispatch({type: REGISTER});
        fetch(`${API_URL}/user/register`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: username,
                    password: password1,
                    password2: password2,
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok){
                return res.json();
            }
            else return res.json().then(err => {throw new Error(err.message)});
        }).then(json => {
            dispatch({type: REGISTER_SUCCESS, payload: json})
        }).catch(err => {
            dispatch({type: REGISTER_FAIL, payload: err})
        })
    }
}