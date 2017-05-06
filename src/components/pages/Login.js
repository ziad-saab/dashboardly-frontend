import React, {Component} from 'react';
import auth from '../../auth';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {

  _handleLogin = () => {
    let { email, password } = this.refs;
    auth.login(email, password, (success)=>{
      if (success) {
        this.props.history.push("/")
      }
      else {
        console.error("error logging in")
      }
    })
  }

  render() {
    return (
      <div className="login">
        <input type="text" ref="email"
          onKeyUp={e=>e.keyCode===ENTER ? this._handleLogin : null}
        />
        <input type="password" ref="password"
          onKeyUp={e=>e.keyCode===ENTER ? this._handleLogin : null}
        />
        <button onClick={this._handleLogin}>login</button>
      </div>
    );
  }

}
