import { 
    FETCHING_BLOGS,
    FETCHING_BLOGS_SUCCESS,
    FETCHING_BLOGS_FAIL,
    CREATE_BLOG,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    FETCHING_BLOG_BY_SLUG,
    FETCHING_BLOG_BY_SLUG_SUCCESS,
    FETCHING_BLOG_BY_SLUG_FAIL,
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL
} from '../actions/blogActions';

const initialState = {
    blogs: [],
    entries: [],
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
        case FETCHING_BLOG_BY_SLUG:
            return {
                ...state,
                fetching: true
            };
        case FETCHING_BLOG_BY_SLUG_SUCCESS:
            return {
                ...state,
                blogs: [...state.blogs, action.payload.data],
                fetching: false,
                error: null
            };
        case FETCHING_BLOG_BY_SLUG_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                fetching: true
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                blogs: [...state.blogs, action.payload.data],
                fetching: false,
                error: null
            };
        case ADD_POST_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case ADD_COMMENT:
            return {
                ...state,
                fetching: true
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                error: null
            };
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}