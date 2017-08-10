import React, {Component} from 'react';
import {Link, browserHistory as history} from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from "../../auth"
import api from '../../api';
import './Menu.css';

class Menu extends Component {
	constructor() {
		super()
		this.state = {
			image: " ",
			loggedIn: ""
		}
	}

	getImage = () => {
		console.log(localStorage, 'this is inside login')
		api.getMe(localStorage.token).then(data => data.body).then(r => {
			this.setState({
				image: r.AvatarUrl,
				loggedIn: auth.isLoggedIn()
			})

		}).catch(e => console.log(e))
	}

	componentDidMount(prevProps, prevState) {
		console.log('it mounted', this.props)
		this.getImage()
	}

	componentDidUpdate(prevProps ,prevState) {
		console.log(this.props.path, 'new one', prevProps.path, 'old one')
		if(this.props.path !== prevProps.path) {
			this.setState({
				image: ""
			})
			this.getImage();
		}
	}

	_logout = (e) => {
		e.preventDefault();
		auth.logout().then(r => history.push('/login'));
	}

	handleClickOutside = () => {
		if (this.props.show === true) {
			this.props.closeMenu();
		}
	}

	render() {
		let {closeMenu, show} = this.props
		const isLoggedIn = auth.isLoggedIn()
		return (
			<div className={`menu ${show
				? "show"
				: ""}`}>

				<div className="menu__header">
					<img src={this.state.image} alt="profile-pic" className="menu__avatar"/>
				</div>

				<div className="menu__list">

					<Link to="/" className="menu__item" onClick={closeMenu}>
						Home
					</Link>

					{!isLoggedIn
						? <Link to="/login" className="menu__item" onClick={closeMenu}>
								Login
							</Link>
						: null}

					{!isLoggedIn
						? <Link to="/signup" className="menu__item" onClick={closeMenu}>
								Signup
							</Link>
						: null}

					{isLoggedIn
						? <div onClick={e => this._logout(e)}>
								Logout
							</div>
						: null}
				</div>
			</div>
		);
	}
}

export default onClickOutside(Menu);
