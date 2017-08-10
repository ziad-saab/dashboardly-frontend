import React, {Component} from 'react';
import './CreateBookmark.css';
import { browserHistory as history } from 'react-router';
import api from '../../api'

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitBookmark = (e) => {
   e.preventDefault();

   api.createBookmark(this.refs.title.value, this.refs.url.value, this.refs.description.value, this.props.boardId, localStorage.token)
   .then( data => {
	   this.props.fetch()
	   console.log(data.body)
	   history.push(`/boards/${this.props.boardId}`)
   }).catch(
     error => console.log("ERROR MAKING BOOKMARK")
   )
  }

  render() {
    return (
      <div>
        <h1>Create New Bookmark</h1>
        <form>
          <input type="text" placeholder="www.instagram.com" ref="url"/>
          <input type="text" placeholder="Instgram" ref="title"/>
          <input type="text" placeholder="Random text goes here." ref="description"/>
          <button onClick={e => this._submitBookmark(e)}>make a bookmark</button>
        </form>
      </div>
    );
  }
}
