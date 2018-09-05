import React from 'react';
import { COMMON_CLASSES, createClassName } from 'common/';
import { CLASSES, NAVIGATION_VIEW, LANDING_PAGE } from './body-constants';
import { VIEW_TYPES } from 'view-navigation/vn-constants';
import BodyRulesList from 'body-rules-list/';
import RuleDetails from 'details-section/';
import StandardsList from 'body-standards-list';
import './style.css';

const ContentBody = ( props ) => {
  const viewTypeClass = props.viewType === VIEW_TYPES.MENU_VIEW ? CLASSES.maxNavHeight : CLASSES.maxTileHeight;
  return (
    <div className={createClassName(CLASSES.contentBody, COMMON_CLASSES.flexRow, COMMON_CLASSES.defaultBackgroundColor, COMMON_CLASSES.flexGrow1, viewTypeClass)}>
      {props.view === NAVIGATION_VIEW || props.view === LANDING_PAGE ? 
        (<div className={CLASSES.contentSpace}>

        </div>) : 
        (<div className={createClassName(COMMON_CLASSES.width100pc, CLASSES.contentBodyChild)}>
          <div className={CLASSES.listArea}>
            { props.listCount === 2 ? <StandardsList/> : undefined}
            <BodyRulesList/>
          </div>
          <div className={CLASSES.detailsArea}>
            <RuleDetails />
          </div>
        </div>)}
    </div>);
};

export default ContentBody;