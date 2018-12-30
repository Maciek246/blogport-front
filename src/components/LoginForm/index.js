import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component{


  render(){

        return (
      <form>
        <span>LOGIN </span><br/>
        <input type="text"  name="login" /> <br/><br/>
        <span>HASŁO </span><br/>
        <input type="password" name="password" /><br/><br/>
        <input type="submit" value="Zaloguj" /><br/>
      </form>
    );
  }
}


export default LoginForm;
