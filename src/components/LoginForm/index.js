import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component{


  render(){

        return (
          <form>
          <div className="register--container">
            <span className="error--info"></span>
            <br/>
            <label for="login" id="loginLabel"> Login
            <br/>
                <input type="text" id="login" name="login" required/>
            </label>
            <label for="password" id="passwordLabel"> Hasło
                <input type="password" id="password" name="password" required />
            </label>
            <br/>
            <input type="submit" id="submit" value="Zaloguj" />
        </div>
      </form>
    );
  }
}


export default LoginForm;
