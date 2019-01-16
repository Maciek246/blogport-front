import React, { Component } from 'react';
import CommentList from '../CommentList';
import './style.css';

class CreatedComment extends Component{
  render(){
    return (
            <div className="CreatedComment--container">
                <h3>DODANE KOMENTARZE:</h3>
                <div className="CreatedComment--list">
                    <CommentList comments={this.props.comments}/>
                </div>
            </div>
    );
  }
}


export default CreatedComment;
