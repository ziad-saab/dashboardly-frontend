import React, {Component} from 'react';
import ModifyBoard from '../modals/ModifyBoard';
import api from '../../api';

export default class EditButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuOpen: false
		};
	}
	closeMenu = () => this.setState({ isMenuOpen: false });

	_handleEdit = (e) => {
		e.preventDefault();
		console.log("i'm trying to handle the edit")
		if (this.props.type === 'bookmark') {
			api.updateBookmark(this.props.id, localStorage.token)
			.then(r => {
			 history.push(`/boards/${this.props.id}/bookmark/${r.body.id}`)
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}

		if (this.props.type === "board") {
			api.updateBoard(this.props.id, localStorage.token)
			.then(r => {
			 history.push(`/boards/${r.body.id}`)
			})
		    .catch( error => console.log("ERROR:", error.stack))
		}
	}


	render() {
			return (
				<div>
				<ModifyBoard type={this.props.type} show={this.state.isMenuOpen} closeMenu={this.closeMenu} id={this.props.id} fetch={this.props.fetch} boardId={this.props.boardId} onSubmit={e => this._handleEdit(e)}/>
				<div className="add-button">
					<button onClick={() => this.setState({isMenuOpen: !this.isMenuOpen})}>
						EDIT
					</button>
				</div>
				</div>
			)
		}
	}
