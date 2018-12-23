import React, { Component } from 'react';
import './style.css';

class BlogTile extends Component{
    render(){
        const { title } = this.props;
        return (
            <div className="blogtile">
                <h1>{title}</h1>
            </div>
        );
    }
}

export default BlogTile;