import React, { Component } from 'react';
import './style.css';

class CommentList extends Component{


  render(){

        return (
                <div className="CommentList--container">
                    <div className="CommentList--authorContainer">
                        <div className="CommentList--authorName">Nickname</div>
                    </div>
                    <div className="CommentList--comment">Treść komentarza</div>
                </div>
    );
  }
}


export default CommentList;
