import { createSelector } from 'reselect'

const filterBlogsByCategory = (state) => {
    if(state.app.selectedCategory){
        return state.blog.blogs.filter(e => e.category === state.app.selectedCategory);
    }
    else{
        return [];
    }
}

export const blogSelector = createSelector(
    filterBlogsByCategory,
    blogs => blogs
)
