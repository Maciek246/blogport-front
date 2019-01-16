import React, {Component} from 'react';
import './style.css';
import CommentForm from '../AddCommentForm';
import CreatedComment from '../CreatedComment';


class CommentContainer extends Component{
    render(){
        return(
            <div className="CommentContainer--container">
                <CommentForm  blog_slug={this.props.blog_slug} entry_slug={this.props.entry_slug}/>
                <CreatedComment comments={this.props.comments}/>
            </div>
        );
    }
}
export default CommentContainer;
