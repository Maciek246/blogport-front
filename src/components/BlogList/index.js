import React, { Component } from 'react';
import BlogTile from '../BlogTile';
import { connect } from 'react-redux';

import { fetch_blogs } from '../../actions/blogActions';

class BlogList extends Component{

    mock_blogs = [
        {name: 'Test 1', slug: 'test-1', category: 'Design'},
        {name: 'Test 2', slug: 'test-2', category: 'Design'},
        {name: 'Test 3', slug: 'test-3', category: 'Travel'},
        {name: 'Test 4', slug: 'test-4', category: 'Travel'},
        {name: 'Test 5', slug: 'test-5', category: 'Travel'},
    ]

    componentDidMount(){
        this.props.fetch_blogs();
    }

    render(){
        const { blogs, category } = this.props;
        return (
            <div className="bloglist">
                {
                    blogs.length > 0 ? 
                    filter_blogs_by_category(blogs, category).map(element => <BlogTile key={element.name} blog={element}/>):
                    filter_blogs_by_category(this.mock_blogs, category).map(element => <BlogTile key={element.name} blog={element}/>)
                } 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.app.selectedCategory,
        blogs: state.blog.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_blogs: () => dispatch(fetch_blogs())
    }
}

const filter_blogs_by_category = (blogs, category) => {
    if(!category) return blogs;
    else return blogs.filter(e => e.category === category)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);