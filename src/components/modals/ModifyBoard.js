import React, {Component} from 'react';
import { browserHistory as history } from 'react-router';
import api from '../../api';
import './Menu.css';
import onClickOutside from 'react-onclickoutside';

class ModifyBoard extends Component {
  constructor() {
    super();
    this.state = {
      inputValue : ''
    }
  }
  handleClickOutside = () => {
    if (this.props.show === true) {
      this.props.closeMenu();
    }
  }
  _handleEdit = (e) => {
		e.preventDefault();
    console.log(this.props, 'the props')
		if (this.props.type === 'bookmark') {
      console.log("i'm trying to handle the edit")

			api.updateBookmark(this.props.boardId, this.refs.title.value, this.refs.description.value, this.props.id, localStorage.token)
			.then(r => {
        this.props.fetch()
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}

		if (this.props.type === "board") {
      console.log("i'm trying to handle the edit")

			api.updateBoard(this.props.id, this.refs.title.value, this.refs.description.value, localStorage.token)
			.then(r => {
        console.log(r.body, "it's this 1")
			 history.push(`/boards/${r.body[0].id}`)
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}
	}
  _handleInput = (event) => {
	event.preventDefault();

	console.log(event.target.value)
    if(event.target.value.length <= 80) {
      this.setState({
        inputValue : event.target.value
      })
    }
  }
  // _submitForm = (e) => {
  //   e.preventDefault();
  //
	// return api.updateBoard(this.props.id, localStorage.token)
	// .then(r => {
	//  history.push(`/boards/${r.body.id}`)
	// })
  //   .catch( error => console.log("ERROR:", error.stack))
  //
  // }
  render() {
    let {closeMenu, show} = this.props

    return (
      <div className={`menu ${show
				? "show"
				: ""}`}>
        <h1>Modify Component</h1>
        <form>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={ e => this._handleInput(e)} ref="description"/>
          <p> {this.state.inputValue.length} / 80</p>
          <button onClick={this._handleEdit.bind(this)}>Edit</button>
        </form>
      </div>
    );
  }
}
export default onClickOutside(ModifyBoard);
