import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard'
import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: ""
    };
  }
  
  componentDidMount() {
    this.fetchBoardData()
  }
  
  fetchBoardData = () => {
    console.log(this.props.params)
      api.getBoard(this.props.params.id)
      .then(({body}) => {
        console.log(body)
        this.setState({
          title: body.title,
          description: body.description,
          bookmarks: body.bookmarks,
          updatedAt: body.title
        })
      })
      .catch(console.error)
  }

  render() {
    let {bookmarks} = this.state
    return (
      <div className="board">
        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        )}
      </div>
    );
  }

}
