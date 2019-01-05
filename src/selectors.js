import { createSelector } from 'reselect';

const filterBlogsByCategory = (state, filter) => {
  // state.blog.blogs is undefine
  // #TODO: Find a method to resolve
  if (filter) {
    return state.blog.blogs.filter(e => e.category === filter);
  }

  return state.blog.blogs ? state.blog.blogs : [];
};

export const blogSelector = createSelector(
  filterBlogsByCategory,
  blogs => blogs,
);
