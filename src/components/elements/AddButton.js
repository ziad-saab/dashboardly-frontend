import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
import { Route } from 'react-router';

export default class AddButton extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showBoard: false
      };
  }

  handleClick(e) {
     e.preventDefault();
      this.setState({
        showBoard:true
      });
      console.log(this.state)
      console.log(this.props.argument)
   }



    render() {
      if( this.state.showBoard===true ){
        return (<CreateBoard/>)
      }
      return(


        <div className="add-button">
            <button onClick={this.handleClick.bind(this)}>
            <i className="fa fa-plus fa-2x"/>
          </button>



        </div>
      )

    }

  }
