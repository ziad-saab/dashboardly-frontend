import React, { Component } from 'react';
import Menu from './modals/Menu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }
  
  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        {isMenuOpen ? <Menu/> : null}
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
