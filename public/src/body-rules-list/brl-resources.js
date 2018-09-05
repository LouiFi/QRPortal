import { apiFetch } from 'common/';
import { RESOURCES } from './brl-constants';

// export const fetchExtensionsList = () => {
//   return fetch(RESOURCES.sources).then(res => res.json());
// };

// export const fetchTechnologiesList = () => {
//   return fetch(RESOURCES.technologies).then(res => res.json());
// };

export const fetchBusinessCriteriaList = ( url ) => {
  return apiFetch( url + RESOURCES.ext_rules );
};

export const fetchData = ( url ) => {
  return apiFetch( url );
};