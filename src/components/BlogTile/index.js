import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryError from '../CategoryError';
import './style.css';

class BlogTile extends Component{
    render(){
        const { blog } = this.props;
        const slug = `/blog/${blog.slug}`;
        return (
            <div className="BlogTile--container">
                <h1 className="BlogTile--title"><Link to={slug} style={{ textDecoration: 'none', color: '#e5b300' }}>{blog.name}</Link></h1>
                <div className="BlogTile--author">{blog.author}</div>
                <div className="BlogTile--category">{blog.categor}</div>
                <div className="BlogTile--description">{blog.description}</div>
            </div>
        );
    }
}

export default BlogTile;