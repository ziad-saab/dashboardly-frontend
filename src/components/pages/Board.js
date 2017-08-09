import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';
import './Board.css';
import AddButton from '../elements/AddButton';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: "",
	  toggle: false
    };
  }

  componentDidMount() {
	console.log('this is componentDidMount of boards')
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id, localStorage.token),
        api.getBookmarks(this.props.params.id, localStorage.token)
      ])
      .then(res => {
        this.setState({
          title: res[0].body.title,
          description: res[0].body.description,
          bookmarks: res[1].body.bookmarks
        })
      })
      .catch(console.error)
  }

  render() {
    let { bookmarks } = this.state
    return (
	<div>
      <div className="board">

        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
			boardId={this.props.params.id}
          />
        )}

      </div>
	  <AddButton />
	</div>
    );
  }

}
