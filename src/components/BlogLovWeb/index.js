import React, {Component} from 'react';
import Entry from '../Entry';
import './style.css';
import { connect } from 'react-redux';
import AddPostPanel from '../AddPostPanel';
import { fetch_blog_by_slug } from '../../actions/blogActions';
import header from '../../assets/images/weddingheader.png';

import { mock_entries } from '../../mocks';


class BlogLovWeb extends Component{

    componentDidMount(){
        this.props.fetch_blog(this.props.match.params.slug)
    }

    render(){
        const blog = this.props.blogs.filter(blog => blog.slug === this.props.match.params.slug);
        console.log(blog, this.props.user);
        return(
            <div className="BlogLovWeb--container">
                <div className="BlogLovWeb--header">
                    <img src={header} alt="header" className="BlogLovWeb--header-img"/>
                </div>
                <p style={{color: 'black', textAlign: 'center'}}>Ten blog wyświetlono: {parseInt(blog[0].views) + 1} razy</p>
                <AddPostPanel blog_url={this.props.match.params.slug}/> 
                <div className="BlogLovWeb--content-container">
                {
                    (blog[0].entries.length > 0)?
                    blog[0].entries.map(entry => <Entry key={entry.slug} entry={entry} blog_slug={this.props.match.params.slug}/>):
                    mock_entries.map(entry => <Entry key={entry.title} entry={entry}/>)

                }
                </div>
                <div className="BlogLovWeb--footer">
                
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blog.blogs,
        user: state.blog.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_blog: (slug) => dispatch(fetch_blog_by_slug(slug))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogLovWeb);
