import React, {Component} from 'react';
import './SignUp.css';
import { API_HOST } from '../../config';
import api from '../../api';


export default class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {
			error : ''
		};
	}

  _handleSignup = (e) => {
    e.preventDefault();
    api.requestSignup(this.refs.email.value, this.refs.password.value)
      .then( res => {
        console.log(res)
        this.props.router.push('/login')
      })
      .catch( e => {
				console.log("ERROR IN SIGNUP:", e.message)
				this.setState({
					error : 'Please enter a vaild email and password'
				})
		  })
  }

  render() {
    return (
      <div>
        <h1>Title!!!!!!</h1>
        <form onSubmit={this._handleSignup}>
          <input type="text" ref="email"/>
          <input type="password" ref="password" />
          <button onClick={this._handleSignup}>Sign Up</button>
					<p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}
