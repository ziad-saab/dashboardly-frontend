import React, {Component} from 'react';
import api from '../../api';

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
		if (this.props.type === 'bookmark') {
			api.deleteBookmark(this.props.boardId, this.props.id, localStorage.token)
			.then(r => {
			 this.props.fetch()
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}

		if (this.props.type === "board") {
			api.deleteBoard(this.props.id, localStorage.token)
			.then(r => {
				this.props.fetch()
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}
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
