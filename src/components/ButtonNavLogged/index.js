import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/userActions'
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

class ButtonNavLogged extends Component {
  render() {
    return (
      <nav>
        <div className="main-navbar">
          <div className="main-navbar main-navbar--content-right">
              <div className="main-navbar main-navbar--content-right">
                <Link to="/user/:username"><button className="button--main-navbar blue">Twoje konto</button></Link>
                <Link to="/blog/:slug/addpost"><button className="button--main-navbar blue">Utwórz nowy post</button></Link>
                <button className="button--main-navbar" onClick={() => this.props.logout()}>Wyloguj się</button>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = {
  logout: logout
}

export default connect(null, mapDispatchToProps)(ButtonNavLogged);
