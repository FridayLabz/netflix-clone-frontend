import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';
import * as PasswordValidator from 'password-validator';
import '../Register/Register.css';
import Cookies from 'universal-cookie';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  onEmailUpdate = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordUpdate = event => {
    this.setState({
      password: event.target.value
    });
  };
  validPassword = password => {
    const schema = new PasswordValidator();

    schema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits()
      .has()
      .symbols()
      .has()
      .not()
      .spaces();

    return schema.validate(password);
  };

  onSubmit = async () => {
    const { email, password } = this.state;

    if (!EmailValidator.validate(email)) {
      this.setState({ error: 'Invalid Email' });
      return;
    }

    if (!this.validPassword(password)) {
      this.setState({ error: 'Invalid Password' });
      return;
    }

    const res = await fetch('http://localhost:3001/accounts/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();
    if (res.status !== 200) {
      this.setState({
        error: data.message
      });
      return;
    }

    this.setState({ error: 'Login successfully.' });

    const cookies = new Cookies();
    cookies.set('Authorization', 'Bearer ' + data.token, { path: '/' });
    
    // TODO: make use of the data
    console.log(data);
    // TODO: redirect to Home Page
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="container-fluid register-container px-4">
        <h1 className="display-4 font-weight-bold">Login</h1>
        <div className="mt-4">
          <input
            type="text"
            className="form-control my-3"
            value={email}
            placeholder="Email"
            onChange={this.onEmailUpdate}
          />
          <input
            type="password"
            className="form-control my-3"
            value={password}
            placeholder="Password"
            onChange={this.onPasswordUpdate}
          />
          <button
            type="submit"
            className="btn btn-danger btn-block"
            onClick={this.onSubmit}
          >
            Login
          </button>
          {error.length ? <p className="alert">{'*' + error}</p> : null}
        </div>
      </div>
    );
  }
}
