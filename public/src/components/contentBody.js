import React from 'react';
import { createClassName } from '../common/lib';
import {VerticalArray, DetailsPanel} from './index';
import '../style/contentBody.css';

export default class ContentBody extends React.PureComponent{
  render(){

    const primaryArrayBlock = this.props.primaryArray.data ? 
        <VerticalArray onItemClick={this.props.onPrimaryItemClick} headers={this.props.primaryArray.headers} values={this.props.primaryArray.keys}>
          {this.props.primaryArray.data}
        </VerticalArray> : undefined,

      secondaryArrayBlock = this.props.secondaryArray.data ? 
        <VerticalArray onItemClick={this.props.onSecondaryItemClick} headers={this.props.secondaryArray.headers} values={this.props.secondaryArray.keys}>
          {this.props.secondaryArray.data}
        </VerticalArray> : undefined;

    return (
      <div className={createClassName('contentBody', 'flxr', 'std-bgc', 'vh100', 'flxGrw1')}>
        {primaryArrayBlock}
        {secondaryArrayBlock}
        { primaryArrayBlock ? <DetailsPanel data={this.props.details}/> : undefined}
      </div>
    );
  }
}