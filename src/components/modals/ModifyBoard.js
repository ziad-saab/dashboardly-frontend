import React, {Component} from 'react';
import { API_HOST } from '../../config'
import { browserHistory as history } from 'react-router';
import './Menu.css';
import onClickOutside from 'react-onclickoutside';

class ModifyBoard extends Component {
  constructor() {
    super();
    this.state = {
      inputValue : ''
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

  _submitForm = (e) => {
    e.preventDefault();

    let fetchConfig = {
      method: 'PATCH',
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
     fetch(`${API_HOST}/boards/${this.props.id}`, fetchConfig)
     .then( data => {
       console.log(data)
       console.log('THIS', this)
       history.push('/boards/123')
     })
     .catch( error => console.log("ERROR:", error.stack))
   )

  }
  handleClickOutside = (e) => {
    e.preventDefault();
	if(this.props.show === true) {
		this.props.closeMenu();
	}
}
  render() {
    let { closeMenu, show } = this.props
    return (
      <div className={`menu ${show?"show":""}`}>
        <h1>Modify Component</h1>
        <form onSubmit={this._submitForm}>
          <p>Title</p>
          <input type="text" ref="title"/>
          <p>Description</p>
          <input type="text" value={this.state.inputValue} onInput={ e => this._handleInput(e)} ref="description"/>
          <p> {this.state.inputValue.length} / 80</p>
          <button onClick={closeMenu}>Edit</button>
        </form>
      </div>
    );
  }
}
export default onClickOutside(ModifyBoard);
