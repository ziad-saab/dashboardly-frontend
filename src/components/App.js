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


        {isMenuOpen ? <Menu closeMenu={this.closeMenu}/> : null}
        {this.props.children}

        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
