import React, {Component} from 'react';
import api from '../../api'
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }
  
  componentDidMount() {
    api.getListOfBoards()
    .then(boards => this.setState({ boards }))
  }

  render() {
    let { boards } = this.state
    return (
      <div className="home">
        { boards.map( b => <div>{b.title} {b.description}</div>) }
      </div>
    );
  }

}
