import React, { Component } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import GuestButton from '../ButtonNavGuest'
import LoggedButton from '../ButtonNavLogged';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

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
    let isAuthenticated = false;
    return (
      <nav>
        <div className="main-navbar">
          <div className="main-navbar main-navbar--content-left">
            <div className="main-navbar main-navbar--search">
              <input id="search" type="text" placeholder=" &#xF002; Podaj szukaną frazę" />
            </div>
          </div>
          <div className="main-navbar main-navbar--content-right">
            {isAuthenticated ?
              <div className="main-navbar main-navbar--content-right">
                <LoggedButton/>
              </div>
              :
              <div className="main-navbar main-navbar--content-right">
                <GuestButton/>
              </div>
            }
          </div>
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