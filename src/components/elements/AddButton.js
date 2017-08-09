import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
import CreateBookmark from '../modals/CreateBookmark';

export default class AddButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showResults: false
		};
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({showResults: true});

		console.log(this.state)
	}
	render() {
		console.log(this.props, 'inside of add button')
		if (this.state.showResults === true && this.props.type === 'bookmark') {
			return (<CreateBookmark boardId={this.props.id}/>)
		}

		if (this.state.showResults === true && this.props.type === 'board') {
			return (<CreateBoard id={this.props.id}/>)
		}

		return (
			<div className="add-button">
				<button onClick={this.handleClick.bind(this)}>
					<i className="fa fa-plus fa-2x"/>
				</button>
			</div>
		)

	}

}
