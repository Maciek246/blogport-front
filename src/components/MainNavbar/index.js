import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import { CurrentUserConsumer } from '../../context/CurrentUser.context'

const userLinks = (
  <div className="main-navbar main-navbar--content-right">
    <Link to="/user/:username"><button className="button--main-navbar blue">Twoje konto</button></Link>
    <Link to="/:slug/addpost"><button className="button--main-navbar blue">Utwórz nowy post</button></Link>
    <a href="#" className="button--main-navbar">Wyloguj się</a>
  </div>
);

const guestLinks = (toggleModalRegister, toggleModalLogin) => (
  <div className="main-navbar main-navbar--content-right">
    <Link to="/user/:username"> <button className="button--main-navbar blue">Twoje konto</button></Link>
    <button className="button--main-navbar" onClick={this.toggleModalRegister}>Zarejestruj się</button>
    <button className="button--main-navbar" onClick={this.toggleModalLogin}>Zaloguj się</button>
  </div>
);

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = { modalLoginIsOpen: false, modalRegisterIsOpen: false };
  }

  toggleModalLogin = () => {
    this.setState({ modalLoginIsOpen: !this.state.modalLoginIsOpen });
  }

  toggleModalRegister = () => {
    this.setState({ modalRegisterIsOpen: !this.state.modalRegisterIsOpen });
  }



  render() {
    return (
      <nav>
        <div className="main-navbar">
          <div className="main-navbar main-navbar--content-left">
            <div className="main-navbar main-navbar--search">
              <input id="search" type="text" placeholder=" &#xF002; Podaj szukaną frazę" />
            </div>
          </div>
          <CurrentUserConsumer>
            {({ user, logout }) => (
              <div className="main-navbar main-navbar--content-right">
                {user
                  ? <div>{user.name}.{userLinks}</div>
                  : <div>{guestLinks}</div>
                }
              </div>
            )}

          </CurrentUserConsumer>
        </div>
        <Modal show={this.state.modalLoginIsOpen} onClose={this.toggleModalLogin}>
          <LoginForm />
        </Modal>
        <Modal show={this.state.modalRegisterIsOpen} onClose={this.toggleModalRegister}>
          <RegisterForm />
        </Modal>
      </nav>
    );
  }
}

export default MainNavbar;
