import React, {Component} from 'react';
import './style.css';
import CommentForm from '../AddCommentForm';
import CreatedComment from '../CreatedComment';


class CommentContainer extends Component{
    render(){
        return(
            <div className="CommentContainer--container">
                <CommentForm/>
                <CreatedComment/>
            </div>
        );
    }
}
export default CommentContainer;
