import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
import CreateBoard from '../modals/CreateBoard'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      toggle: false
    };
  }

  toggle = (event) => {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }));
  }

  componentDidMount() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
    .catch(console.error)
  }

  _clicked = () => {
    alert("hello world")
  }


  render() {
    let { boards } = this.state
    return (
      <div className="home">
        { boards.map(b =>
          <BoardCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            updatedAt={b.updatedAt}
          />
        )}
        {auth.isLoggedIn() ? <AddButton clicked={this.toggle}/> : null}
      </div>
    );
  }

}
