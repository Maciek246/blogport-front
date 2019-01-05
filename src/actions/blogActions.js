const API_URL = 'http://localhost:8080';

export const FETCHING_BLOGS = 'FETCHING_BLOGS';
export const FETCHING_BLOGS_SUCCESS = 'FETCHING_BLOGS_SUCCESS';
export const FETCHING_BLOGS_FAIL = 'FETCHING_BLOGS_FAILS';

export const CREATE_BLOG = 'CREATE_BLOG';
export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const CREATE_BLOG_FAIL = 'CREATE_BLOG_FAILS';

export function fetch_blogs(){
    return dispatch => {
        dispatch({type: FETCHING_BLOGS});
        fetch(`${API_URL}/blog`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else return res.json().then(err => {throw new Error(err.message)});
        })
        .then(json => {
            dispatch({type: FETCHING_BLOGS_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: FETCHING_BLOGS_FAIL, payload: err})
        })
    }
}

export function create_blog(token, blogname, category){
    return dispatch => {
        dispatch({type: CREATE_BLOG})
        fetch(`${API_URL}/blog`, {
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
            else return res.json().then(err => {throw new Error(err.message)});
        })
        .then(json => {
            dispatch({type: CREATE_BLOG_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: CREATE_BLOG_FAIL, payload: err})
        })
    }
}