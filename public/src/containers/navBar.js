import { connect } from 'react-redux';
import { toggleNavBar, setSelectedNavItem, openMenuElement, updatePrimaryVerticalArray } from '../actions/index';
import NavBar from '../components/navbar';
import Axios from 'axios';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    selected: state.navBar.selected,
    children: state.navItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavBar());
    },
    onMenuOpen: ( index ) => {
      dispatch( openMenuElement(index) );
    },
    onItemClick: ( ref, href, title ) => {
      dispatch(setSelectedNavItem(ref));
      if( /(\/quality-standards\/)/ig.test(href) ) href += '/categories';
      console.log(title);
      fetch('rest?q='+href)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then( data => {
          if (Array.isArray( data )) dispatch( updatePrimaryVerticalArray({
            headers: ['ID', 'Name', 'Critical'],
            keys: ['id', 'name', 'critical'],
            data: data}) );
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);