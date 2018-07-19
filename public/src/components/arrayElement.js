import React from 'react';
import ArrayCell from './arrayCell';

export default class ArrayElement extends React.PureComponent{
  render(){
    return (
      <tr onClick={this.props.onItemClick}>
        {this.props.children.map( val => <ArrayCell header={this.props.header} critical={val.critical}>{val.name}</ArrayCell> )}
      </tr>
    );
  }
}