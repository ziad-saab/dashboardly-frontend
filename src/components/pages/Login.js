import React, {Component} from 'react';
import auth from '../../auth'
import './Login.css';
import {API_HOST} from '../../config';
const ENTER = 13;

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  _handleLogin = (e) => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    if (email && password) {
		console.log('ok wtf')
      auth.login(email, password)
      .then(res => this.props.router.push('/'))
      .catch(console.error)
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
        <form>
          <input type="text" ref="email"
            onKeyUp={this._handleTyping}
          />
          <input type="password" ref="password"
            onKeyUp={this._handleTyping}
          />
          <button onClick={e => this._handleLogin(e)}>login</button>
        </form>
      </div>
    );
  }

}
