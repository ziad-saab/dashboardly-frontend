import React, {Component} from 'react';
import './BookmarkCard.css';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
	console.log(this.props, "these are the props inside bookmark card")
    let { title, description, url } = this.props
    return (
	<div>
      <a className="bookmark-card" href={url}>
        <div>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
        <img src={url} alt={title}/>
      </a>
		<EditButton type={`bookmark`} fetch={this.props.fetchData} id={this.props.id} boardId={this.props.boardId}/>
		<DeleteButton type={`bookmark`} fetch={this.props.fetchData} id={this.props.id} boardId={this.props.boardId}/>
	</div>
    );
  }

}
