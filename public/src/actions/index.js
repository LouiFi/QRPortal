import { TOGGLENAVBAR, UPDATEDETAILS, SETSELECTEDNAVITEM, OPENMENUELEMENT, UPDATEPRIMARYVERTICALARRAY, UPDATESECONDARYVERTICALARRAY } from './types';

export function toggleNavBar(){
  return {
    type: TOGGLENAVBAR
  };
}

export function setSelectedNavItem( ref ){
  return {
    type: SETSELECTEDNAVITEM,
    payload: ref
  };
}

export function openMenuElement( index ){
  return {
    type: OPENMENUELEMENT,
    payload: index
  };
}

export function updatePrimaryVerticalArray( newArray ){
  return {
    type: UPDATEPRIMARYVERTICALARRAY,
    payload: newArray
  };
}

export function updateSecondaryVerticalArray( newArray ){
  return {
    type: UPDATESECONDARYVERTICALARRAY,
    payload: newArray
  };
}

export function updateDetails( data ){
  return {
    type: UPDATEDETAILS,
    payload: data
  };
}