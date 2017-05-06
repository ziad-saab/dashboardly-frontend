import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside'
import './Menu.css';


class Menu extends Component {
  
  handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {
    let {closeMenu, show} = this.props
    return (
      <div className={`menu ${show?"show":""}`}>
        <div className="menu__header">
          <img src="" alt="profile-pic" className="menu__avatar"/>
        </div>
      </div>
    );
  }

}

export default onClickOutside(Menu);
