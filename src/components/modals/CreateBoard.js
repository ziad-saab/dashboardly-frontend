import React, {Component} from 'react';
import api from '../../api';
import { browserHistory as history } from 'react-router';

export default class CreateBoard extends Component {
  constructor() {
    super();
    this.state = {
      inputValue : '',
      titleValue : '',
      errorTitle : ''
    }
  }

  _handleInput = (event) => {
    if(event.target.value.length <= 80) {
      this.setState({
        inputValue : event.target.value
      })
    }
  }

  _handleTitle = (event) => {
    if(event.target.value.length <= 50) {
      this.setState({
        titleValue : event.target.value
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
    .catch( e => {
      console.log("ERROR MAKING BOARD:", e.message)
      this.setState({
        errorTitle : "You board needs a title"
      })
      console.log(e)
  })
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <form onSubmit={this._submitForm}>
          <p>Title</p>
          <input type="text" value={this.state.titleValue} onInput={this._handleTitle} ref="title"/>
          <p> {this.state.titleValue.length} / 50</p>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={this._handleInput} ref="description"/>
          <p> {this.state.inputValue.length} / 80</p>
          <button>Create</button>
          <p>{this.state.errorTitle}</p>
        </form>
      </div>
    );
  }
}
