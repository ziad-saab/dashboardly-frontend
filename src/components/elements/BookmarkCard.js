import React, {Component} from 'react';
import { Link } from 'react-router';
import './BookmarkCard.css';

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, url } = this.props
    return (
      <a className="bookmark-card" href={url}>
        <div>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
        <img src={""} alt={title}/>
      </a>
    );
  }

}
