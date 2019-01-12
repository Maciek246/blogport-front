import React, { Component } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

class ButtonNavGuest extends Component {
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
          <div className="main-navbar main-navbar--content-right">
              <div className="main-navbar main-navbar--content-right">
                <button className="button--main-navbar" onClick={this.toggleModalRegister}>Zarejestruj się</button>
                <button className="button--main-navbar" onClick={this.toggleModalLogin}>Zaloguj się</button>
              </div>
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

export default ButtonNavGuest;
