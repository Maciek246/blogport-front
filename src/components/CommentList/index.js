import React, { Component } from 'react';
import './style.css';

class CommentList extends Component{


  render(){

        return (
                <div className="CommentList--container">
                    <div className="CommentList--authorContainer">
                        <div className="CommentList--authorAvatar">Avatar</div>
                        <div className="CommentList--authorName">Nick</div>
                    </div>
                    <div className="CommentList--comment">Treść komentarza</div>
                </div>
    );
  }
}


export default CommentList;
