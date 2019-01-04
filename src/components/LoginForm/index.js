import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <div className="register--container">
          <span className="error--info" />
          <br />
          <label htmlFor="login" id="loginLabel">
            {' '}
Login
            <br />
            <input type="text" id="login" name="login" required />
          </label>
          <label htmlFor="password" id="passwordLabel">
            {' '}
Hasło
            <input type="password" id="password" name="password" required />
          </label>
          <br />
          <input type="submit" id="submit" value="Zaloguj" />
        </div>
      </form>
    );
  }
}


export default LoginForm;
