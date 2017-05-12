import React, {Component} from 'react';
import api from '../../api';

import './CreateBookmark.css';

const ENTER = 13;

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._createBookmark();
    }
  }

  // gona have to put an if here to check for the props or not, if it
  // has an id then it means we are updating the bookmark
  // and will need to call _updateBookmark instead of _createBookmark
  _createBookmark = () => {
    let {
      title: {
        value: title
      },
      url: {
        value: url
      }
    } = this.refs;

    var bookmarkUrl = "";

    if(url.startsWith('https://') || url.startsWith('http://')) {
        bookmarkUrl = url;
    }
    else {
        bookmarkUrl = 'https://' + url;
    }

    api.createBookmark(title, bookmarkUrl, this.props.id)
    //.then(this.props.updateBookmarks);
  }

  render() {
    return (
      <div className="createBookmarkModal">
        <input type="text" ref="title" placeholder="Title"
          defaultValue={this.props.title}
          onKeyUp={this._handleTyping}
        />
        <input type="text" ref="url" placeholder="Url"
          defaultValue={this.props.url}
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._createBookmark}>Create</button>
      </div>
    );
  }

}
