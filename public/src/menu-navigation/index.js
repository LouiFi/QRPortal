import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationMenu from './mn-model';
import * as ACTIONS from './mn-actions';
import { showContentView, setListCount} from 'body/body-actions';
import { fetchStandardsListData } from 'body-standards-list/bsl-actions';
import { fetchBusinessCriteriaList, fetchApiData } from 'body-rules-list/brl-actions';
import { setHeaderPath } from 'path-navigation/nv-actions';
import { ITEMS } from './mn-constants';
import { QUERIES } from './mn-resources';
import { hideSearchResults } from 'global-search/gs-actions';
import { clearDetailsData } from 'details-section/ds-actions';

const mapStateToProps = (state) => {
  return {
    viewType: state.viewType.viewType,
    technologies: state.navMenu.technologies,
    extensions: state.navMenu.extensions,
    selected: state.navMenu.selected,
    std_bc: state.navMenu.std_cast,
    std_cisq: state.navMenu.std_cisq,
    std_owasp: state.navMenu.std_owasp
  };
};

const paths = {
  standard: {name: ITEMS.STANDARDS, href: QUERIES.standards},
  cisq: {name: ITEMS.CISQ, href: QUERIES.cisq},
  owasp: {name: ITEMS.OWASP, href: QUERIES.owasp},
  businessCriteria: {name: ITEMS.BUSINESSCRITERIA, href: QUERIES.businessCriteria},
  technologies: {name: ITEMS.TECHNOLOGIES, href: QUERIES.technologies},
  extensions: {name: ITEMS.EXTENSIONS, href: QUERIES.extensions}
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateStd_bc: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchBusinessCriteria());
    },
    populateStd_cisq: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchCisq());
    },
    populateStd_owasp: (exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchOwasp());
    },
    populateTechnologies:(exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchTechnologies());
    },
    populateExtensions:(exeCount) => {
      if( exeCount !== 0 ) return;
      dispatch(ACTIONS.fetchExtensions());
    },
    onCisqClick: ( name, href ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( href ));
      dispatch(setHeaderPath( paths.standard, paths.cisq, {name} ));
    },
    onOwaspClick: ( name, href ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(setListCount(2));
      dispatch(showContentView());
      dispatch(fetchStandardsListData( href ));
      dispatch(setHeaderPath( paths.standard, paths.owasp,  {name} ));
    },
    onBusinessCriteriaClick: (name, href) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchBusinessCriteriaList( href ));
      dispatch(setHeaderPath(paths.standard, paths.businessCriteria, {name}));
    },
    onTechnologyClick: (name, href) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchApiData( href ));
      dispatch(setHeaderPath( paths.technologies , {name}));
    },
    setSelected: (ref) => {
      dispatch(ACTIONS.setSelectedItem(ref));
    },
    onExtensionsClick: ( extension, version ) => {
      dispatch(hideSearchResults());
      dispatch(clearDetailsData());
      dispatch(setListCount(1));
      dispatch(showContentView());
      dispatch(fetchApiData( version.href ));
      dispatch(setHeaderPath( paths.extensions, {name: extension.title, href: extension.href}, version));
    },
    fetchVersion: ( exeCount, extension ) =>{
      if( exeCount !== 0 ) return;
      if (extension.index !== 0) {
        dispatch(ACTIONS.fetchExtensionVersion(extension));
      } else {
        dispatch(ACTIONS.fetchAIPVersions());
      }
      
    }
  };
};

NavigationMenu.propTypes = {
  viewType: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);