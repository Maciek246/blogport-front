import { SET_CATEGORY } from '../actions/applicationActions';

const initialState = {
    selectedCategory: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state;
    }
}