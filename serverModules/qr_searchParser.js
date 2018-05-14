const glob = require('./glob');
const path = require('path');
const rulesDir = path.basename('../quality-rules');
const search = require('./search');
const filter = require('./filters');
const QS = require('../quality-standards.json');

const readJsonFile = require('../serverModules/readFile');

let index = {
  qualityRules: [],
  qualityStandards: []
};

function convertToSearchString ( dataObject ) {
  return {
    id: dataObject.id,
    name: dataObject.name,
    searchid: `${dataObject.id} - ${dataObject.name}`,
    technologies: dataObject.technologies,
    resString: dataObject.technologies.map( tech => `${tech.name} : ${dataObject.id} - ${dataObject.name}`)
  };
}

function convertQsToSearchIndex( dataObject, par ){
  return {
    id: dataObject.id,
    searchid: dataObject.id,
    name: par.name,
    resHref: par.href
  };
}

function SearchIndex( query, indexDef ){
  return search( query, index[ indexDef ], ( e ) => e.searchid );
  /*return res.map( e => {
    filter(e.technologies);
    return JSON.stringify(e);
  } );*/
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const QRinitializationTest = () =>{
  const testidx = getRandomInt(index.qualityRules.length),
    test = getRandomInt( 2 ) === 0 ? index.qualityRules[testidx].id : index.qualityRules[testidx].name.substring( /:/g, getRandomInt(index.qualityRules[testidx].name.length) );
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityRules'));
}; 

const QSinitializationTest = () => {
  const testidx = getRandomInt(index.qualityStandards.length),
    test = index.qualityStandards[testidx].id;
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityStandards'));
};

/* initialization */
(function (){
  glob( rulesDir, ( fileName, contents, i ) => {
    const searchString = convertToSearchString( contents );
    index.qualityRules[i] = searchString ;
  }, ( err ) => {
    throw err;
  }, () => {
    console.log('Quality Rules Search Index created');
    if( process.env.NODE_ENV !== 'production' )QRinitializationTest();
  });
  let qsi = 0;
  QS.forEach((std) => {
    readJsonFile(std.href, ( name, content ) => {
      content.forEach( fLink => {
        readJsonFile( fLink.href, ( n, c ) => {
          c.forEach( o => {
            const indexObj = convertQsToSearchIndex( o, fLink );
            index.qualityStandards[qsi++] = indexObj;
          } );
        }, undefined, ( e ) => {
          throw e;
        });
      });
    }, undefined, ( e ) => {
      throw e;
    });
  });
}());

setTimeout(() => {
  console.log('Quality Standards Search Index created');
  if( process.env.NODE_ENV !== 'production' )QSinitializationTest();
}, 1000);

module.exports = SearchIndex;