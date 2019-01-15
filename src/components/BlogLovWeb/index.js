import React, {Component} from 'react';
import Entry from '../Entry';
import './style.css';
import { connect } from 'react-redux';
import { fetch_blog_by_slug } from '../../actions/blogActions';
import header from '../../assets/images/weddingheader.png';

import { mock_entries } from '../../mocks';


class BlogLovWeb extends Component{

    componentDidMount(){
        if(!this.props.blogs){
            this.props.fetch_blog_by_slug(this.props.match.params.slug)
        }
    }

    render(){
        const entries = this.props.blogs.filter(blog => blog.slug === this.props.match.params.slug);
        console.log(entries[0])
        return(
            <div className="BlogLovWeb--container">
                <div className="BlogLovWeb--header">
                    <img src={header} alt="header" className="BlogLovWeb--header-img"/>
                </div>
                <div className="BlogLovWeb--content-container">
                {
                    (entries[0].entries.length > 0)?
                    entries[0].entries.map(entry => <Entry key={entry.title} entry={entry}/>):
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
        blogs: state.blog.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch_blog: (slug) => dispatch(fetch_blog_by_slug(slug))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogLovWeb);
