import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';
import Spinner from 'react-spinkit';
import './style.css';

class LoginForm extends Component{

  state = {
    username: "",
    password: "",
  }

  loginRequest = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  } 



  render(){
        if(this.props.loading){
          return <Spinner name="three-bounce" color="white"/>
        } else 
        return (
            <form method="POST">
              <div className="register--container">
                <p>{this.props.error}</p>
                <span className="error--info"></span>
                <br/>
                <label for="login" id="loginLabel"> Login
                  <br/>
                  <input type="text" id="login" onChange={this.handleUsername} name="login" required/>
                </label>
                <label for="password" id="passwordLabel"> Hasło
                  <input type="password" id="password" onChange={this.handlePassword} name="password" required />
                </label>
              <br/>
              <input type="submit" id="submit" value="Zaloguj" onClick={this.loginRequest}/>
          </div>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.username,
    loading: state.user.loading,
    error: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
