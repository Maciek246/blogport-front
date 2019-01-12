import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["login"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["login"]) {
      formIsValid = false;
      errors["login"] = "To pole jest wymagane. Proszę podać swój login!";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "To pole jest wymagane. Proszę podać swoje hasło!";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  render() {
    return (
      <form name="LoginForm" onSubmit={this.submitLoginForm} >
        <div className="login--container">
          <span className="error--info"></span>
          <br />
          <label for="login" id="loginLabel"> Login
            <br />
            <input type="text" name="login" id="login" value={this.state.fields.login} onChange={this.handleChange} />
          </label>
          <div className="errorMessage">{this.state.errors.login}</div>
          <label for="password" id="passwordLabel"> Hasło
            <br />
            <input type="password" name="password" id="password" value={this.state.fields.password} onChange={this.handleChange} />
          </label>
          <div className="errorMessage">{this.state.errors.password}</div>
          <br />
          <input type="submit" id="submit" value="Zaloguj" />
        </div>
      </form>
    );
  }
}

export default LoginForm;