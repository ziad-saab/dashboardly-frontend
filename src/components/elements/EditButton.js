import React, {Component} from 'react';
import ModifyBoard from '../modals/ModifyBoard';
import {API_HOST} from '../../config'

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

		  let fetchObj = {
			  method: "PATCH",
			  body: {
				  title: this.props.title,
				  description: this.props.description
			  }
		  }
		  fetch(this.props.url, fetchObj)
		  	.then(r => {
				console.log(r)
		})

	}
	
	render() {
		if (this.state.isMenuOpen === true) {
			return (
				<div>
				<ModifyBoard show={this.state.isMenuOpen} closeMenu={this.closeMenu} click={e => this._handleEdit(e)}/>
				<div className="add-button">
					<button onClick={() => this.closeMenu}>
						EDIT
					</button>
				</div>
				</div>
		)
		}
		return (
			<div className="add-button">
				<button onClick={() => this.setState({isMenuOpen: true})}>
					EDIT
				</button>
			</div>
		)
	}
}
