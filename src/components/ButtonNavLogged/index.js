import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/userActions'
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

class ButtonNavLogged extends Component {
  render() {
    const user_url = `/user/${this.props.username}`;
    let blog = this.props.blogs.filter(blog => blog.author === this.props.username)

    return (
      <nav>
        <div className="main-navbar">
          <div className="main-navbar main-navbar--content-right">
              <div className="main-navbar main-navbar--content-right">
                <Link to={user_url}><button className="button--main-navbar blue">Twoje konto</button></Link>
                {
                  blog.length > 0 ?
                  <Link to={`/blog/${blog[0].slug}/addpost`}><button className="button--main-navbar blue">Utwórz nowy post</button></Link>
                  :
                  <Link to="/addblog"><button className="button--main-navbar blue">Utwórz blog</button></Link>
                }
                <button className="button--main-navbar" onClick={() => this.props.logout()}>Wyloguj się</button>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    blogs: state.blog.blogs
  }
}

const mapDispatchToProps = {
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNavLogged);
