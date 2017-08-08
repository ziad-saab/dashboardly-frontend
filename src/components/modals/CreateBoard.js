import React, {Component} from 'react';

export default class CreateBoard extends Component {

  render() {
    return (
      <div>
        <h1>Title</h1>
        <form>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" ref="description"/>
          <button onClick={this.props.click}>Create</button>
        </form>
      </div>
    );
  }
}
