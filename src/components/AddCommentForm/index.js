import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_comment_to_entry } from '../../actions/blogActions';
import './style.css';

class AddCommentForm extends Component{

  state = { content: '' }

  handleContent = (e) => {
    this.setState({content: e.target.value})
  }

  addComment = (e) => {
    e.preventDefault();
    const { blog_slug, entry_slug, token } = this.props;
    this.props.add_comment(blog_slug, entry_slug, token, this.state.content);
  }

  render(){
    return (
      <div className="CommentForm--container">
          <textarea placeholder="Zostaw komentarz" onChange={this.handleContent} className="CommentForm--textarea"></textarea>
          <br/>
          <input type="submit" onClick={this.addComment} className="CommentForm--submit"/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_comment: (blog, entry, token, comment) => dispatch(add_comment_to_entry(blog, entry, token, comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
