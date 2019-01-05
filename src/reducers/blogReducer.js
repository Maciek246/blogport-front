import { FETCHING_BLOGS, FETCHING_BLOGS_SUCCESS, FETCHING_BLOGS_FAIL, CREATE_BLOG, CREATE_BLOG_SUCCESS, CREATE_BLOG_FAIL } from '../actions/blogActions';

const initialState = {
    blogs: [],
    fetching: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCHING_BLOGS:
            return {
                ...state,
                fetching: true
            };
        case FETCHING_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.payload.data,
                fetching: false
            };
        case FETCHING_BLOGS_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case CREATE_BLOG:
            return {
                ...state,
                fetching: true
            };
        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
                fetching: false
            };
        case CREATE_BLOG_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}