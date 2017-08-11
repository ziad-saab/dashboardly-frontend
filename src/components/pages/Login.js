import React, {Component} from 'react';
import auth from '../../auth';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {
  constructor() {
		super()
		this.state = {
			error : ""
  }
}

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let user =  {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log(user, 'this is in login');
    if (user.email && user.password) {
      console.log("in the if")
      auth.login(user.email, user.password)
      .then(res =>
        this.props.router.push('/'))
      .catch(e => {
        console.log("ERROR", e.message)
        this.setState({
          error : "Username or password is incorrect"
        })
        console.error(e)
      })
    }
    else {
      console.log("we made to the else statement")
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
          <p>{this.state.error}</p>

      </div>
    );
  }

}
