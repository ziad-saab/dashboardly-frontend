import React, {Component} from 'react';
import './SignUp.css';



const url="https://private-739305-dashboardly.apiary-mock.com/";

export default class SignUp extends Component {


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

   return (
     fetch(`${url}/auth/users`, fetchConfig)
     .then( function(res){
       console.log(res)
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
