import React, {Component} from 'react';
import './BookmarkCard.css';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import {API_HOST} from '../../config'

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
		<EditButton type={`bookmark`} id={this.props.id}/>
		<DeleteButton type={`bookmark`} id={this.props.id}/>
	</div>
    );
  }

}
