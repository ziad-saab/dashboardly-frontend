import React, {Component} from 'react';
import api from '../../api';
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

	api.createBoard(this.refs.title.value, this.refs.description.value, localStorage.token)
	.then(r => {
		console.log(r.body[0])
		history.push(`/boards/${r.body[0].id}`)
	})
    .catch( error => console.log("ERROR:", error.stack))
  }


  render() {
    return (
      <div>
        <h1>Title</h1>
        <form onSubmit={this._submitForm}>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={this._handleInput} ref="description"/>s
          <p> {this.state.inputValue.length} / 80</p>
          <button>Create</button>
        </form>
      </div>
    );
  }
}
