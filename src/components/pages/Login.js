import React, {Component} from 'react';
import api from '../../api';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    if (email && password) {
      api.requestLogin(email, password)
      .then(res => {
        if (res) {
          let token = res.body.token
          this.props.router.push('/')
        }
        else {
          console.error("error logging in")
        }
      })
    }
    else {
      this.setState({ error: "Please enter an email and password"})
    }
  }
  
  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleLogin()
    }
  }

  render() {
    return (
      <div className="login">
        <input type="text" ref="email"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleLogin}>login</button>
      </div>
    );
  }

}
