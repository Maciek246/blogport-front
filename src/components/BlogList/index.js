import React, { Component } from 'react';
import BlogTile from '../BlogTile';

class BlogList extends Component{
    render(){
        return (
            <div className="bloglist">
                <BlogTile title="Test 1"/>
                <BlogTile title="Test 2"/>
                <BlogTile title="Test 3"/>
            </div>
        );
    }
}

export default BlogList;