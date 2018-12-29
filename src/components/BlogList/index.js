import React, { Component } from 'react';
import BlogTile from '../BlogTile';
import { connect } from 'react-redux';
import { blogSelector } from '../../selectors';

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
        const { blogs } = this.props;
        return (
            <div className="bloglist">
                {
                    blogs.length > 0 ?
                    blogs.map(element => <BlogTile blog={element}/>):
                    this.mock_blogs.map(element => <BlogTile blog={element}/>)
                } 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blog.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_blogs: () => dispatch(fetch_blogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);