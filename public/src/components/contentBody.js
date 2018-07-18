import React from 'react';
import { createClassName } from '../common/lib';
import VerticalArray from './verticalArray';
import '../style/contentBody.css';

export default class ContentBody extends React.PureComponent{
  render(){
    return (
      <div className={createClassName('contentBody', 'flxc', 'std-bgc', 'vh100', 'flxShnk1')}>
        <VerticalArray onItemClick={this.props.onItemClick} headers={['ID', 'Name', 'Critical']} values={['id','name', 'critical']}>
          {this.props.arrayValues}
        </VerticalArray>
      </div>
    );
  }
}