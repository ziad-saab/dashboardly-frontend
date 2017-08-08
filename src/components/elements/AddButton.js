import React, {Component} from 'react';


export default class AddButton extends Component {



render() {
  return(
    <div className="add-button">
      <button onClick={this.props.clicked}><i className="fa fa-plus fa-2x"/></button>
    </div>
  )
}
}
