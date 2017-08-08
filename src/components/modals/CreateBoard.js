import React, {Component} from 'react';

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
