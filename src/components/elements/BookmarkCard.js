import React, {Component} from 'react';
import CreateBookmark from '../modals/CreateBookmark';
import api from '../../api';

import './BookmarkCard.css';

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateModal: false
    };
  }

  render() {
    let { title, url } = this.props
    return (
      <div>
        <a className="bookmark-card" href={url}>
          <div>
            <h2>{ title }</h2>
          </div>
          <img src={""} alt={title}/>
        </a>
        <button className="bookmarkEditButton" onClick={()=>this.setState({showCreateModal: true})}>
          Edit
        </button>
        <button className="bookmarkDeleteButton" onClick={this._handleDelete}>
          Delete
        </button>

        {this.state.showCreateModal
          ? <CreateBookmark
            //boardId={id}
            title={title}
            url={url}
            // updateBookmarks={this._fetchBoards}
            />
          : null
        }
      </div>
    );
  }

}
