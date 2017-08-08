import React, {Component} from 'react';
import './SignUp.css';
import { API_HOST } from '../../config';


export default class SignUp extends Component {
constructor(props) {
  super();
}


  _handleSignup = (e) => {
    e.preventDefault();
    console.log(this.refs.email.value)
    let fetchConfig = {
      method: 'POST',
      mode: 'cors',
      headers: {
             "Content-Type" : 'application/json'
           },
      body: JSON.stringify({
            "email" : this.refs.email.value,
            "password" : this.refs.password.value
     })
   }
   console.log("about to return")
   return (
     fetch(`${API_HOST}/auth/users`, fetchConfig)
     .then( res => {
       console.log('THIS')
       this.props.router.push('/login')
     })
     .catch( error => console.log("ERROR:", error.stack))
   )
   }

  render() {
    return (
      <div>
        <h1>Title!!!!!!</h1>
        <form onSubmit={this._handleSignup}>
          <input type="text" ref="email"/>
          <input type="password" ref="password" />
          <button onClick={this._handleSignup}>Sign Up</button>
        </form>
      </div>
    );
  }

}
