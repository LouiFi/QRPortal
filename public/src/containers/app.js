import React from 'react';
import NavBar from './NavBar';
import { createClassName } from '../common/lib';
import ContentBody from './contentBody';

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={createClassName( 'flxr', 'txtcenter' )}>
        <NavBar />
        <ContentBody />
      </div>
    );
  }
}