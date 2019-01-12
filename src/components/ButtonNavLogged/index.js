import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <button className="button--main-navbar">Wyloguj się</button>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ButtonNavLogged;
