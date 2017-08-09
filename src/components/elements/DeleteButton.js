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
	_handleDelete = (e) => {
		  e.preventDefault();
		  console.log(this.props)
		  let fetchObj = {
			  method: "DELETE",
			  body: {
				  id: this.props.id
			  }
		  }
		  fetch(`${API_HOST}/boards/${this.props.id}`, fetchObj)
		  	.then(r => {
				console.log(r)
		})
	}
	render() {
		return (
			<div className="add-button">
				<button onClick={e => this._handleDelete(e)}>
					X
				</button>
			</div>
		)
	}
}
