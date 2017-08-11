import React, {Component} from 'react';
import { Link } from 'react-router';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, id } = this.props
    console.log(localStorage.user, this.props.ownerId, "the stuff")
    return (
	  <div>
	      <Link to={`/boards/${id}`}>
	        <div className="board-card">
	          <h2>{ title }</h2>
	          <p>{ description }</p>
	        </div>
	      </Link>
	  	  {+localStorage.user === +this.props.ownerId ? <EditButton type={`board`} id={id} /> : null}
	  	  {+localStorage.user === +this.props.ownerId ? <DeleteButton fetch={this.props.fetchData} type={`board`} id={id} /> : null}
	  </div>
    );
  }
}
