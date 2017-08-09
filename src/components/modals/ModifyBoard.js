import React, {Component} from 'react';
import { browserHistory as history } from 'react-router';
import api from '../../api';

export default class ModifyBoard extends Component {
  constructor() {
    super();
    this.state = {
      inputValue : ''
    }
  }

  _handleInput = (event) => {
	event.preventDefault();

	console.log(event.target.value)
    if(event.target.value.length <= 80) {
      this.setState({
        inputValue : event.target.value
      })
    }
  }
  _submitForm = (e) => {
    e.preventDefault();
   //
   //  console.log('hello world')
   //  let fetchConfig = {
   //    method: 'PATCH',
   //    mode: 'cors',
   //    headers: {
   //           "Content-Type" : 'application/json'
   //         },
   //    body: JSON.stringify({
   //          "title" : this.refs.title.value,
   //          "description" : this.refs.description.value
   //   })
   // }
   //
   // return (
   //   fetch(`${API_HOST}/boards/${this.props.id}`, fetchConfig)
   //   .then( data => {
   //     console.log(data)
   //     console.log('THIS', this)
   //     history.push('/boards/123')
   //   })
   //
   //
	 console.log(this.props, 'these are the props inside modify board')
	 return api.updateBoard(this.props.id, localStorage.token)
	 .then(r => {
		 console.log(r, "this is the resp from getBoard in modify board")
		 history.push(`/boards/${r.body.id}`)
	 })
     .catch( error => console.log("ERROR:", error.stack))

  }
  render() {
    return (
      <div>
        <h1>Modify Component</h1>
        <form onSubmit={this._submitForm}>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={ e => this._handleInput(e)} ref="description"/>
          <p> {this.state.inputValue.length} / 80</p>
          <button>Edit</button>
        </form>
      </div>
    );
  }
}
