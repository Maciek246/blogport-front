import React, { Component } from 'react';
import BlogTile from '../BlogTile';
import CategoryError from '../CategoryError';
import { connect } from 'react-redux';
import { fetch_blogs } from '../../actions/blogActions';
import { mock_blogs } from '../../mocks';
import './style.css';

class BlogList extends Component{

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
                    <CategoryError/> // filter_blogs_by_category(mock_blogs, category).map(element => <BlogTile key={element.name} blog={element}/>)
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