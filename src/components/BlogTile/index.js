import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class BlogTile extends Component{
    render(){
        const { blog } = this.props;
        return (
            <div className="blogtile">
                <h1><Link to={blog.slug}>{blog.name}</Link></h1>
            </div>
        );
    }
}

export default BlogTile;