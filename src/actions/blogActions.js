const API_URL = 'http://localhost:8080';

export const FETCHING_BLOGS = 'FETCHING_BLOGS';
export const FETCHING_BLOGS_SUCCESS = 'FETCHING_BLOGS_SUCCESS';
export const FETCHING_BLOGS_FAILS = 'FETCHING_BLOGS_FAILS';

export function fetch_blogs(){
    return dispatch => {
        dispatch({type: FETCHING_BLOGS});
        fetch(`${API_URL}/blog`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else throw Error;
        })
        .then(json => {
            dispatch({type: FETCHING_BLOGS_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: FETCHING_BLOGS_FAILS, payload: err})
        })
    }
}

export function create_blog(token, blogname, category){
    return dispatch => {
        fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            },
            body: JSON.stringify({
                name: blogname,
                category: category
            })
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else throw Error;
        })
        .then(json => {
            // dispatch({type: FETCHING_BLOGS_SUCCESS, payload: json})
        })
        .catch(err => {
            // dispatch({type: FETCHING_BLOGS_FAILS, payload: err})
        })
    }
}