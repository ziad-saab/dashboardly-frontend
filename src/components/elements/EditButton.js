import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
import {API_HOST} from '../../config'

export default class EditButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showResults: false
		};
	}
	_handleEdit = (e) => {
		  e.preventDefault();

		  let fetchObj = {
			  method: "PATCH",
			  body: {
				  title: this.props.title,
				  description: this.props.description
			  }
		  }
		  fetch(`${API_HOST}/boards/${this.prop.id}`, fetchObj)
		  	.then(r => {
				console.log(r)
		})
	}
	_handleClick = (e) => {
      e.preventDefault();
	  this.setState({
		  showResults: true
	  })
	}
	render() {
		if (this.state.showResults === true) {
			return (<CreateBoard click={e => this._handleEdit(e)}/>)
		}
		return (
			<div className="add-button">
				<button onClick={e => this._handleClick(e)}>
					EDIT
				</button>
			</div>
		)
	}
}
