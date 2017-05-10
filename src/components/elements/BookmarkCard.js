import React, {Component} from 'react';
import './BookmarkCard.css';

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, url } = this.props
    return (
      <a className="bookmark-card" href={url}>
        <div>
          <h2>{ title }</h2>
        </div>
        <img src={""} alt={title}/>
      </a>
    );
  }

}
