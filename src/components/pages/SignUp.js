import React, {Component} from 'react';
import './SignUp.css';
import { API_HOST } from '../../config';




export default class SignUp extends Component {


  _handleSignup = (e) => {
    e.preventDefault();
    //console.log(this.refs.email.value)
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

   return (
     fetch(`${API_HOST}/auth/users`, fetchConfig)
     .then( function(res) {
       //console.log(res)
       this.props.router.push('/login')
     })
     .catch( error => console.log(error.stack))
   )
   }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <form onSubmit={this._handleSignup}>
          <input type="text" ref="email"/>
          <input type="password" ref="password" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }

}
