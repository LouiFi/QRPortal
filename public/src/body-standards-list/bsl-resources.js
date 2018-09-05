import { apiFetch } from 'common/';

export const fetchStandardsRules = ( url ) => {
  return fetch('rest/' + url + '/quality-rules').then(res => res.json());
};

export const fetchStandardsListElements = ( url ) => {
  return apiFetch( url + '/items' );
};