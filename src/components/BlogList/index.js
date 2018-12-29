import React, { Component } from 'react';
import BlogTile from '../BlogTile';
import { connect } from 'react-redux';

import { fetch_blogs } from '../../actions/blogActions';

class BlogList extends Component{

    mock_blogs = [
        {title: 'Test 1'},
        {title: 'Test 2'},
        {title: 'Test 3'},
        {title: 'Test 4'},
        {title: 'Test 5'},
    ]

    render(){
        return (
            <div className="bloglist">
                {this.mock_blogs.map(element => <BlogTile title={element.title}/>)} 
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