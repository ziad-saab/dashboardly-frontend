import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import {API_HOST} from '../../config';
import './Menu.css';


class Menu extends Component {
  constructor() {
    super()
    this.state = {
      image : "hello"
    }
  }
  getImage = () => {
    fetch(`${API_HOST}/auth/me`)
    .then( data => data.json())
    .then(r => {
      console.log(r)
       this.setState({
         image : r.avatarUrl
       })
    })
    .catch(e => console.log(e))
  }
  componentDidMount() {
    this.getImage();
  }
   _logout = (e) => {
	  e.preventDefault();
      auth.logout()
      .then(r => {
          console.log(r);
          let fetchObj = {
              method: "DELETE",
              body: {
                  token: r
              }
          }
          fetch(`${API_HOST}/auth/sessions`, fetchObj)
            .then( res => this.props.router.push('/login'))
      })
  }

  handleClickOutside = () => {
	if(this.props.show === true) {
		this.props.closeMenu();
	}
  }
  render() {
    let { closeMenu, show } = this.props
    const isLoggedIn = auth.isLoggedIn()
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
          <img src={this.state.image} alt="profile-pic" className="menu__avatar"/>
        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item" onClick={closeMenu}>
              Login
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup
            </Link>
          : null}

          {isLoggedIn ?
			<div onClick={ e => this._logout(e)}>
				Logout
			</div>
          : null}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Menu);
