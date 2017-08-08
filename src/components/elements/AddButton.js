import React from 'react';


class Button extends React.Component{

 render() {

	return (
	  <a href={this.props.url} className="add-button">
	  	<i className="fa fa-plus fa-2x"/>
	  </a>
  )}
}

export default Button;
