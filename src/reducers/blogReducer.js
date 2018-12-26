import { FETCHING_BLOGS, FETCHING_BLOGS_SUCCESS, FETCHING_BLOGS_FAILS } from '../actions/blogActions';

const initialState = {
    blogs: [],
    fetching: false,
    errors: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCHING_BLOGS:
            return state;
        case FETCHING_BLOGS_SUCCESS:
            return state;
        case FETCHING_BLOGS_FAILS:
            return state;
        default:
            return state;
    }
}