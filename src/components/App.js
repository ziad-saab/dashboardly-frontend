import React, { Component } from 'react';
import Menu from './modals/Menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }
  
  closeMenu = () => this.setState({ isMenuOpen: false })
  
  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        <div className="App-navbar">
          <i className="fa fa-bars fa-2x" onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}/>
        </div>

        <Menu show={isMenuOpen} closeMenu={this.closeMenu}/>

        {this.props.children}

      </div>
    );
  }
}

export default App;
