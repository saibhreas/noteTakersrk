const express =require ('express');
const util = require('util');
const path =require('path');
const fs = require('fs');
const router = require('../routes/apiRoutes');

const stat = util.promisify(fs.stat);

//add a note, update a note, delete a note

  // goes only to notes.html
router.get('/notes'), (req, res)=> {
  res.
  sendfile(path.join(__dirname, '../public/notes.html'));
}
  //* is Wildcard, all routs not notes will go to index
router.get('*'), (req, res)=> {
  res.sendfile(path.join(__dirname, '../public/index.html'));
}

// Setup post route (post creates or updates data )
app.post("/api/notes", function(req, res) {
  // Receives a current note, adds it to db.json, then returns the current note
  let currentNote = req.body;
  notes.push(currentNote);
  updateDb();
  return console.log("Current note: "+currentNote.title);
});

//writes to the json file whenever a note is added or deleted
function updateDb() {
  fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
      if (err) throw err;
      return true;
  });
}

module.export = stores




