//look up util.promisfy  allow the use of ID's since no DB being built
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

//TODO write getNotes()
GeolocationCoordinates(){
  return read.then{
    //parse the notes to return as parsed notes
  }
}
//funtionality of getNotes:
//API route calls getNotes
// then they are reurned as json in apiRoutes
//