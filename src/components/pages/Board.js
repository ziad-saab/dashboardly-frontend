import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
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
	  toggle: false,
      showCreateMenu: false
    };
  }

  componentDidMount() {
    this.fetchBoardData()
	console.log(this.props.params, 'this is componentDidMount of boards')
  }

  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id, localStorage.token),
        api.getBookmarks(this.props.params.id, localStorage.token)
      ])
      .then(res => {
        this.setState({
          boardOwner: res[0].body[0].ownerId,
          title: res[0].body[0].title,
          description: res[0].body[0].description,
          bookmarks: res[1].body.bookmarks,

	  })
      })
      .catch(console.error)
  }
  render() {
    let { bookmarks } = this.state
    console.log(bookmarks)
    return (
	<div>
	  <h1>{this.state.title}</h1>
      <div className="board">

        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
			      boardId={this.props.params.id}
            fetchData={this.fetchBoardData}
            ownerId={this.state.boardOwner}
          />
        )}

      </div>
	  <AddButton type={'bookmark'} showCreateMenu={this.state.showCreateMenu} fetchData={this.fetchBoardData} id={this.props.params.id}/>
	</div>
    );
  }

}
