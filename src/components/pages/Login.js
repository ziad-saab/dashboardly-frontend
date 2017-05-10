import React, {Component} from 'react';
import auth from '../../auth'
import './Login.css';

const ENTER = 13;

export default class Login extends Component {

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let { email: {value: email}, password: {value: password} } = this.refs;
    if (email && password) {
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
