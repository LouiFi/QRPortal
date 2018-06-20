import React from 'react';
import NavItem from './navItem/navitem';
import { createClassName } from '../common/lib';
import './style.css';

class NavBar extends React.PureComponent {
  render() {
    const open = this.props.isOpen ? 'Open' : 'Closed';
    return (
      <div className={createClassName('LeftBar', open)}>
        <div className='Top'>
          <img src={'img/LogoStructuralRules.svg'} className='Logo' alt='logo' /><p className={createClassName('Title',open)}>Structural Rules</p>
        </div>
        <div className='Nav'>
          {this.props.children.map( (section, index) => <NavItem key={index} selected={this.props.selected} href={section.href} name={section.name} onItemClick={this.props.onItemClick}>{section.children}</NavItem>)}
        </div>
        <div className='Bottom' onClick={this.props.onClick}>
          <img src={'img/ArrowSideBar.svg'} className={createClassName('ArrowSideBar', open)} alt='Collapse/Extend'/>
        </div>
      </div>
    );
  }
}

export default NavBar;