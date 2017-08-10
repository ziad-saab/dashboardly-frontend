import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';


// const display = {
//   display: 'block'
// };
// const hide = {
//   display: 'none'
// };

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body })
    })
    .catch(console.error)
  }

  _clicked = () => {
    alert("hello world")
  }
  render() {
    let { boards } = this.state
    console.log(boards)
    return (
      <div className="home">
        { boards.map(b =>
          <BoardCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            updatedAt={b.updatedAt}
            fetchData={this._fetchBoards}
            ownerId={b.ownerId}
          />
        )}
        {auth.isLoggedIn() ? <AddButton type={'board'} clicked={this.toggle}/> : null}
      </div>
    );
  }

}
