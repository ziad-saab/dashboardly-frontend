
import React, {Component} from 'react';
import './CreateBoookmark.css';

export default class CreateBoookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form action="">
			<label htmlFor="">Title</label>
			<input type="text"/>
			<label htmlFor="">URL</label>
			<input type="text"/>
			<button>Submit Bookmark</button>
		</form>
      </div>
    );
  }

}
