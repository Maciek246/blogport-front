import React, { Component } from 'react';
import './style.css';

class CommentList extends Component{
  render(){
    return (this.props.comments.map(comment => (
      <div className="CommentList--container">
        <div className="CommentList--authorContainer">
          <div className="CommentList--authorName">{comment.author}</div>
        </div>
        <div className="CommentList--comment">{comment.content}</div>
      </div>
    )));
  }
}


export default CommentList;
