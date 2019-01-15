import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import GuestButton from '../ButtonNavGuest'
import LoggedButton from '../ButtonNavLogged';
import { connect } from 'react-redux';
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
    return (
      <nav>
        <div className="main-navbar">
          <div className="main-navbar main-navbar--content-left">
            <Link to="/" className="BlogPort--title">BlOGPoRt</Link>
          </div>
          <div className="main-navbar main-navbar--content-right">
            <div className="main-navbar main-navbar--content-right">
              {this.props.token && this.props.username ?
                <LoggedButton/>
                :
                <GuestButton/>
              }
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

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    token: state.user.token,
  }
}

export default connect(mapStateToProps)(MainNavbar);