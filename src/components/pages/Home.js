import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import CreateBoard from '../modals/CreateBoard';
import auth from '../../auth';
import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      showCreateModal: false
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  componentWillUpdate() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
    .catch(console.error)
  }
//updateBoards={this._fetchBoards}
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
        {auth.isLoggedIn()
          ? <AddButton action={()=>this.setState({showCreateModal: true})}/>
          : null
        }

        {this.state.showCreateModal
          ? <CreateBoard updateBoards={this._fetchBoards}/>
          : null
        }
      </div>
    );
  }

}
