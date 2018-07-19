import React from 'react';
import { createClassName } from '../common/lib';
import '../style/menuItem.css';

class MenuItem extends React.PureComponent{
  render(){
    return (<div className={createClassName('menuItem', (this.props.selected ? 'selected' : undefined))} 
      onClick={ () => this.props.onclick( this.props._ref, this.props.href, this.props.title)}>
      <span className={'menuItem-title'}>{this.props.title}</span>
    </div>);
  }
}

export default MenuItem;