import React, {Component} from 'react';
import api from '../../api';

import './CreateBoard.css';

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _createBoard = () => {
    let {
        title: {
          value: title
        },
        description: {
          value: description
        }
    } = this.refs;

    console.log('CreateBoard title ' + title, 'CreateBoard description ' + description)
    api.createBoard(title, description)
    //.then(this.props.router.push('/')) // gives an error saying cannot use then on undefined
  }

  render() {
    return (
      <div className="createBoardModal">
        <h1>Title</h1>
        <input type="text" ref="title" placeholder="Title" />
        <textarea ref="description" rows="4" cols="50" placeholder="Description">
        </textarea>
        <button onClick={this._createBoard}>Create</button>
      </div>
    );
  }

}
