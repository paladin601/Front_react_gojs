import React, { Component } from 'react';
import * as go from 'gojs';

export default class Task extends Component  {

  render() {
    return (
      <div>
        {this.updateDiagram()}
      </div>
    );
  }

  updateDiagram(){
    this.props.diagram.model=go.Model.fromJson(this.props.task.text);
    }

}
