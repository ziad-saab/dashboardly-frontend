import React, {Component} from 'react';
import './CreateBookmark.css';
import { browserHistory as history } from 'react-router';
import { API_HOST } from '../../config'

export default class CreateBoookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  _submitBookmark = (e) => {
    e.preventDefault();
    console.log('hello world')
    console.log("inputs", this.refs.url.value, this.refs.title.value, this.refs.description.value)
    let fetchConfig = {
      method: 'POST',
      mode: 'cors',
      headers: {
             "Content-Type" : 'application/json',
             "authorization" : localStorage.token
           },
      body: JSON.stringify({
            "url" : this.refs.url.value,
            "title" : this.refs.title.value,
            "description" : this.refs.description.value
     })
   }

   return (
     fetch(`${API_HOST}/boards/123/bookmarks`, fetchConfig)
     .then( data => { data.json() })
     .then( r => {history.push(`/`)})
     .catch( error => console.log("ERROR:", error.stack))
   )
  }



  render() {
    return (
      <div>
        <h1>Create New Bookmark</h1>
        <form onSubmit={this._submitBookmark}>
          <input type="text" placeholder="www.instagram.com" ref="url"/>
          <input type="text" placeholder="Instgram" ref="title"/>
          <input type="text" placeholder="Random text goes here." ref="description"/>
          <button>make a bookmark</button>
        </form>
      </div>
    );
  }

}
