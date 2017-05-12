import React from 'react';

export default (props) => (
  <div className="add-button" onClick={()=>props.action()}>
    <i className="fa fa-plus fa-2x"  />
  </div>
)
