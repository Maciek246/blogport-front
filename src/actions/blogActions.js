const API_URL = 'http://localhost:8080';

export const FETCHING_BLOGS = 'FETCHING_BLOGS';
export const FETCHING_BLOGS_SUCCESS = 'FETCHING_BLOGS_SUCCESS';
export const FETCHING_BLOGS_FAIL = 'FETCHING_BLOGS_FAILS';

export const CREATE_BLOG = 'CREATE_BLOG';
export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const CREATE_BLOG_FAIL = 'CREATE_BLOG_FAILS';

export const FETCHING_BLOG_BY_SLUG = 'FETCHING_BLOG_BY_SLUG';
export const FETCHING_BLOG_BY_SLUG_SUCCESS = 'FETCHING_BLOG_BY_SLUG_SUCCESS';
export const FETCHING_BLOG_BY_SLUG_FAIL = 'FETCHING_BLOG_BY_SLUG_FAILS';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAILS';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAILS';


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

export function fetch_blog_by_slug(slug){
    return dispatch => {
        dispatch({type: FETCHING_BLOG_BY_SLUG});
        fetch(`${API_URL}/blog/${slug}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else return res.json().then(err => {throw new Error(err.message)});
        })
        .then(json => {
            dispatch({type: FETCHING_BLOG_BY_SLUG_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: FETCHING_BLOG_BY_SLUG_FAIL, payload: err})
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


// export function fetch_entries_from_blogs(blog_slug){
//     return dispatch => {
//         dispatch({type: FETCHING_ENTRIES});
//         fetch(`${API_URL}/blog/${blog_slug}/`)
//         .then(res => {
//             if(res.ok){
//                 return res.json();
//             }
//             else return res.json().then(err => {throw new Error(err.message)});
//         })
//         .then(json => {
//             dispatch({type: FETCHING_ENTRIES_SUCCESS, payload: json})
//         })
//         .catch(err => {
//             dispatch({type: FETCHING_ENTRIES_FAIL, payload: err})
//         })
//     }
// }

export function addpost(token, blog_slug, post_data){
    return dispatch => {
        dispatch({type: ADD_POST})
        fetch(`${API_URL}/blog/${blog_slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            },
            body: JSON.stringify({title: post_data.title, content: post_data.content})
        }).then(res => {
            if(res.ok){
                return res.json()
            }
            else return res.json().then(err => {throw new Error(err.message)});
        }).then(json => {
            dispatch({type: ADD_POST_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: ADD_POST_FAIL, payload: err})
        })
    }
}

export function add_comment_to_entry(blog, entry, token, comment){
    return dispatch => {
        dispatch({type: ADD_COMMENT})
        fetch(`${API_URL}/blog/${blog}/${entry}/comments`, {
            method: 'POST',
            body: JSON.stringify({content: comment}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        }).then(res => {
            if(res.ok){
                return res.json()
            }
            else return res.json().then(err => {throw new Error(err.message)});
        }).then(json => {
            dispatch({type: ADD_COMMENT_SUCCESS, payload: json})
        })
        .catch(err => {
            dispatch({type: ADD_COMMENT_FAIL, payload: err})
        })
    }
}