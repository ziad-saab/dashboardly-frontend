import React, {Component} from 'react';
import './CreateBoard.css';
import { API_HOST } from '../../config';
import { browserHistory as history} from 'react-router';
import AddButton from '../elements/AddButton';


export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  _handleInput = (event) => {
    if (event.target.value.length <= 80) {
      this.setState({
        inputValue : event.target.value
      })
    }
  }

  _submitBoard = (e) => {
    e.preventDefault();
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
      fetch(`${API_HOST}/boards`)
      .then(data => {
        history.push(`/boards/123`);
      })
      .catch( error => console.log("error!", error.stack))
    )
  }


  render() {
    return (
      <div id="results">
        <form onSubmit={this._submitBoard}>
          <p>Create New Board</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" ref="description" value={this.state.inputValue} onInput={this._handleInput}/>
          <p>{this.state.inputValue.length} / 80</p>
          <button>Create</button>
        </form>
      </div>
    );
  }

}
