const API_URL = 'http://localhost:8080';
// 'Authorization': `JWT ${token}`

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

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