import React, {Component} from 'react';
import auth from '../../auth';

import './SignUp.css';

const ENTER = 13;

export default class SignUp extends Component {
  

  _handleSignup = () => {
    let {
      username: {
        value: username
      },
      email: {
        value: email
      },
      password: {
        value: password
      }
    } = this.refs;

    if (username && email && password) {
      auth.signup(username, email, password)
      .then(res => this.props.router.push('/login'))
      .catch(console.error);
    }
    else {
      this.setState({error: "Please fill in all fields"});
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
      <div className="signup">
        <input type="text" ref="username" placeholder="Username"
          onKeyUp={this._handleTyping}
        />
        <input type="text" ref="email" placeholder="Email"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password" placeholder="Password"
          onKeyUp={this._handleTyping}
        />

        <button onClick={this._handleSignup}>Sign Up</button>

       {this.state && this.state.error ?
          <p>{this.state.error}</p>
          : null
        }
      </div>
    );
  }

}
