import React, { Component } from 'react';
import './style.css';
class RegisterForm extends Component{
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
            <label for="email" id="emailLabel">Email <br/>
              <input type="email" id="email" name="email" required/>
            </label>
            <br/>
            <input type="submit" id="submit" value="Zaloguj" />
        </div>
      </form>
    );
  }
}
export default RegisterForm;
