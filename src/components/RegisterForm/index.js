import React, { Component } from 'react';
import './style.css';
class RegisterForm extends Component{
  render(){
        return (
      <form>
          <div className="register--container">
            <div className="scroll">
                <span className="error--info"></span>
                <br/>
                <label for="firstName" className="regLabel">Imię: 
                    <br/>
                    <input type="text" id="firstName" name="firstName" required/>
                </label>
                    <br/>
                <label for="lastName" className="regLabel">Nazwisko: 
                    <br/>
                    <input type="text" id="lastName" name="lastName" required/>
                </label>
                    <br/>
                <label for="email" className="regLabel">Email: <br/>
                <input type="email" id="email" name="email" required/>
                </label>
                    <br/>
                <label for="login" className="regLabel">Username:
                    <br/>
                    <input type="text" id="username" name="login" required/>
                </label>
                    <br/>
                <label for="regPass1" className="regLabel">Hasło: 
                    <br/>
                    <input type="password" id="regPass1" name="regPass1" required/>
                </label>
                    <br/>
                <label for="regPass2" className="regLabel">Powtórz hasło: 
                    <br/>
                    <input type="password" id="regPass2" name="regPass2" required/>
                </label>
                    <br/>
                <input type="submit" id="submit" value="Zaloguj" />
                <br/>
            </div>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
