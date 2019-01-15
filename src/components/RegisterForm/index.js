import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { register } from '../../actions/userActions';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    password1Error: "",
    password2Error: "",
    passwordCompareError: ""
  };

class RegisterForm extends Component{
    state = initialState;
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };
      validate = () => {
        let nameError = "";
        let surnameError = "";
        let emailError = "";
        let password1Error = "";
        let password2Error = "";
        let passwordCompareError = "";
        let usernameError = "";
    
        if (!this.state.firstName) {
          nameError = "Puste pole imię!";
        }
        if (!this.state.lastName) {
            surnameError = "Puste pole nazwisko!";
          }
        if (!this.state.email.includes("@")) {
          emailError = "Błędny email";
        }
        if(!this.state.username){
            usernameError = "Podaj nazwę użytkownika!";
        }
        if(!this.state.password1){
            password1Error = "Podaj hasło!";
        }
        if(!this.state.password2){
            password2Error = "Podaj hasło!";
        }
        if(this.state.password1 !== this.state.password2){
            passwordCompareError = "Hasła muszą być takie same!";
        }
        if (emailError || nameError || surnameError || password1Error || password2Error  || passwordCompareError || usernameError) {
          this.setState({ emailError, nameError, surnameError, password1Error, password2Error, passwordCompareError, usernameError });
          return false;          
        }
        return true;
      };

      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          this.props.register(
              this.state.username,
              this.state.password1,
              this.state.password2,
              this.state.email,
              this.state.firstName,
              this.state.lastName
            )
          this.setState(initialState);
        }
      };

  render(){
        return (
      <form onSubmit={this.handleSubmit}>
          <div className="register--container">
            <div className="scroll">
                <label htmlFor="firstName" className="regLabel">Imię: 
                    <br/>
                    <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    <br/>
                    <output className="error--info">{this.state.nameError}</output>                    
                </label>
                    <br/>
                <label htmlFor="lastName" className="regLabel">Nazwisko: 
                    <br/>
                    <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    <br/>
                    <output className="error--info">{this.state.surnameError}</output>
                </label>
                    <br/>
                <label htmlFor="email" className="regLabel" value={this.state.email} onChange={this.handleChange}>Email: <br/>
                <input type="text" id="email" name="email"/>
                <br/>
                <output className="error--info">{this.state.emailError}</output>
                </label>
                    <br/>
                <label htmlFor="username" className="regLabel">Nazwa użytkownika:
                    <br/>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <br/>
                    <output className="error--info">{this.state.usernameError}</output>
                </label>
                    <br/>
                <label htmlFor="password1" className="regLabel">Hasło: 
                    <br/>
                    <input type="password" id="regPass1" name="password1" value={this.state.password1} onChange={this.handleChange}/>
                    <br/>
                    <output className="error--info">{this.state.password1Error}</output>
                </label>
                    <br/>
                <label htmlFor="password2" className="regLabel">Powtórz hasło: 
                    <br/>
                    <input type="password" id="regPass2" name="password2" value={this.state.password2} onChange={this.handleChange}/>
                    <br/>
                    <output className="error--info">{this.state.password2Error}</output>
                </label>
                    <br/>
                    <output className="error--info">{this.state.passwordCompareError}</output>
                    <br/>
                <input type="submit" id="submit" value="Zaloguj" />
                <br/>
                <br/>
            </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        errors: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (username, password, password2, email, first_name, last_name) => dispatch(register(username, password, password2, email, first_name, last_name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
