import React, {Component} from 'react';
import { Link } from 'react-router';
import CreateBoard from '../modals/CreateBoard';
import api from '../../api';

import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateModal: false
    };
  }

  //easier way of doing this? it's also in home.js
  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
    .catch(console.error)
  }

  _handleDelete = () => {
    api.deleteBoard(this.props.id) // id is the board id
    .then(this._fetchBoards); // this doesn't update the boards properly
  }

  render() {
    let { title, description, id } = this.props
    return (
      <div>
        <Link to={`/boards/${id}`}>
          <div className="board-card">
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
        </Link>
        <button className="boardEditButton" onClick={()=>this.setState({showCreateModal: true})}>
          Edit
        </button>
        {/* Make sure deleting this will also delete
          all bookmarks associated with it as well */}
        <button className="boardDeleteButton" onClick={this._handleDelete}>
          Delete
        </button>

        {this.state.showCreateModal
          ? <CreateBoard
            boardId={id}
            title={title}
            description={description}
            updateBoards={this._fetchBoards}
            />
          : null
        }
      </div>
    );
  }

}
