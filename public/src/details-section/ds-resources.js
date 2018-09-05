
export const fetchQualityStandardListDataFromTag = ( tagObject ) =>{
  return fetch('rest/AIP/quality-standards/' + tagObject.standard + '/items/' + tagObject.id + '/quality-rules' )
    .then(res => res.json());
};