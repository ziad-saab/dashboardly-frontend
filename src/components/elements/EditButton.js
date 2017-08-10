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
				<ModifyBoard show={this.state.isMenuOpen} closeMenu={this.closeMenu} id={this.props.id} click={e => this._handleEdit(e)}/>
				<div className="add-button">
					<button onClick={() => this.setState({isMenuOpen: !this.isMenuOpen})}>
						EDIT
					</button>
				</div>
				</div>
			)
		}
	}
