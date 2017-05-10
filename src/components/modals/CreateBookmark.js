import React, {Component} from 'react';
import api from '../../api';

import './CreateBoookmark.css';

export default class CreateBoookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _createBookmark = () => {
    let {
      title: {
        value: title
      },
      url: {
        value: url
      }
    } = this.refs;

    api.createBookmark(title, url);
  }

  render() {
    return (
      <div className="createBookmarkModal">
        <h1>Title</h1>
        <input type="text" ref="title" placeholder="Title" />
        <input type="text" ref="url" placeholder="Url" />
        <button onClick={this._createBookmark}>Create</button>
      </div>
    );
  }

}
