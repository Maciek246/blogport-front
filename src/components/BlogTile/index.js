import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class BlogTile extends Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="blogtile">
        <h1><Link to={blog.slug}>{blog.name}</Link></h1>
        <h1 className="BlogTile--title"><Link to={blog.slug} style={{ textDecoration: 'none', color: '#e5b300' }}>{blog.name}</Link></h1>
        <div className="BlogTile--author">AUTOR</div>
        <div className="BlogTile--category">KATEGORIA</div>
        <div className="BlogTile--description">OPIS</div>
      </div>
    );
  }
}

export default BlogTile;
