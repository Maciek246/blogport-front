import React, { Component } from 'react';
import './style.css';
import CommentContainer from '../CommentContainer';

class Entry extends Component{
    constructor(){
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(){
        const { title, content, createdAt, updatedAt, comments, slug } = this.props.entry;
        return(
            <div className="Entry--content">
                <h1 className="Entry--title">{title}</h1>
                <p className="Entry--text">
                   {content}
                </p>
                <p className="Entry--dates">Dodano: {createdAt} Edytowano: {updatedAt}</p>
                <a className="Entry--comment" onClick={this.toggleHidden.bind(this)} >Skomentuj</a>
                {!this.state.isHidden && <CommentContainer blog_slug={this.props.blog_slug} entry_slug={slug} comments={comments}/>}
            </div>
        );
    }
}

export default Entry;