import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';


class Menu extends Component {
  
  handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {
    let { closeMenu, show } = this.props
    const isLoggedIn = auth.loggedIn()
    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
          <img src="" alt="profile-pic" className="menu__avatar"/>
        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item"> Home </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item"> Login </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item"> Signup </Link>
          : null}

          {isLoggedIn ?
            <Link to="/logout" className="menu__item"> Logout </Link>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
