const express = require('express');
const path = require('path');
const UNIQ = require('./serverModules/uniq');
const fs = require('fs');
const readJsonFile = require('./serverModules/readFile');

/*
// google analytics back-end
const got = require('got');
const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'UA-119529646-1';
*/
// cors
const cors = require('cors');

// helmet handle request security
const helmet = require('helmet');

const searchIndex = require('./serverModules/qr_searchParser');

var port = process.env.PORT || 8080;

var app = express();
// security startup
app.use( helmet() );
app.disable('x-powered-by');

// cross domain access GLOBAL ACCESS ONLY
app.use(cors({
  withCredentials: true
}));

//app.use(express.static('QRPortal'));
app.use(express.static('static'));

/*app.get('/qrportal/extensions/', function(req, res) {
	
  console.log('index>'+req.url);
	
  var urlfull = req.url;
	
  res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')));
//    res.sendFile(path.join(__dirname + req.url));
});*/

// ---------------------- React Front End Routes ------------------------------ //

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/index.html'));
});

app.get('/QRPortal.js', (req, res)=> {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/QRPortal.js'));
});

app.get('/QRPortal.js.map', (req, res)=> {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/QRPortal.js.map'));
});

app.get('/style.css', (req, res)=> {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/src/css/style.css'));
});

app.get('/img/*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/qrp_WebApp/src' + req.url));
});

app.get('/mlturl/*', (req, res)=>{
  const q = req.query;
  let r = undefined;
  if( q.hasOwnProperty('u') ){
    const arr = q.u.map( u => require( path.join( __dirname, u)));
    r = [].concat(...arr);
  }
  const uniqArr = q.hasOwnProperty('f') ? UNIQ(r, val => val[q.f] ) : UNIQ(r, val => val.id );
  res.json(uniqArr);
});

app.get('/search', (req, res)=>{
  const q = req.query;
  const r = searchIndex( q.s, q.f );
  res.json(r);
});

app.get('/about', (req,res)=>{
  fs.readFile( './LICENSE', 'utf8', ( err, fileContents ) => {
    if ( err ) {
      console.log( err );
      res.status(500).send({error: 'a problem occured'});
    }
    readJsonFile( 'package.json', (fileName, jsonData ) =>{
      res.json({licence: fileContents, version: jsonData.version});
    }, undefined, (e) => {
      console.log( e );
      res.status(500).send({error: 'a problem occured'});
    });
  });
});

// ------------------------ End of React Routes ------------------------------ //

// ----------------------------- Global API routes ---------------------------- //

app.get(/^\/[A-a-z-]+.json/i, function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});

app.get(/\/[A-a-z-]+\//i, function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});

// ---------------------------------------------------------------------------- //

app.get('/default.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/static/'));
});

app.listen(port, function() {

  console.log('Listening...'+port);	
	
});