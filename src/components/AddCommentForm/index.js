import React, { Component } from 'react';
import './style.css';

class AddCommentForm extends Component{


  render(){

        return (
                <div className="CommentForm--container">
                    <textarea placeholder="Zostaw komentarz" className="CommentForm--textarea"></textarea>
                    <br/>
                    <input type="submit" className="CommentForm--submit"/>
                </div>
    );
  }
}


export default AddCommentForm;
