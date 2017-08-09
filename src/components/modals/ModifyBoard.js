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

	return api.updateBoard(this.props.id, localStorage.token)
	.then(r => {
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
