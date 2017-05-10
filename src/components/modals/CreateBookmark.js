import React, {Component} from 'react';
import api from '../../api';

import './CreateBookmark.css';

export default class CreateBookmark extends Component {
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

    api.createBookmark(title, url, this.props.id)
    .then(this.props.updateBookmarks);
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
