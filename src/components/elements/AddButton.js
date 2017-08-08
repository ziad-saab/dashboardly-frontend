import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard';
import Board from '../pages/Board';

export default class AddButton extends Component {
  constructor(props) {
    super(props);

      this.state = {
        showResults: false
      };


  }


  handleClick(e) {
     e.preventDefault();
      this.setState({
        showResults:true
      });

      console.log(this.state)
   }
    render() {
      if(this.state.showResults===true){
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
