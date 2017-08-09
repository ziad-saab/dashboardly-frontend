import React, {Component} from 'react';
import { API_HOST } from '../../config'
import { browserHistory as history } from 'react-router';

export default class CreateBoard extends Component {
  constructor() {
    super();
    this.state = {
      inputValue : ''
    }
  }
 
  _handleInput = (event) => {
    if(event.target.value.length <= 80) {
      this.setState({
        inputValue : event.target.value
      })
    }
  }

  _submitForm = (e) => {
    e.preventDefault();
    console.log('hello world')
    let fetchConfig = {
      method: 'POST',
      mode: 'cors',
      headers: {
             "Content-Type" : 'application/json'
           },
      body: JSON.stringify({
            "title" : this.refs.title.value,
            "description" : this.refs.description.value
     })
   }

   return (
     fetch(`${API_HOST}/boards`, fetchConfig)
     .then( data => data.json())
	 .then( r => {
		 console.log(r)
		 history.push(`/boards/${r[0].id}`)
	 })
     .catch( error => console.log("ERROR:", error.stack))
   )
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <form onSubmit={this._submitForm}>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={this._handleInput} ref="description"/>
          <p> {this.state.inputValue.length} / 80</p>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
