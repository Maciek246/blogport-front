import { FETCHING_BLOGS, FETCHING_BLOGS_SUCCESS, FETCHING_BLOGS_FAILS } from '../actions/blogActions';

const initialState = {
  blogs: [],
  fetching: false,
  errors: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOGS:
      return {
        ...state,
        fetching: true,
      };
    case FETCHING_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload.data,
        fetching: false,
      };
    case FETCHING_BLOGS_FAILS:
      return {
        ...state,
        fetching: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
