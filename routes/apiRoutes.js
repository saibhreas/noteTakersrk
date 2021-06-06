const path = require("path");
const router = require("express").Router();
const store = require("../db/store");

//create a route that responds with all notes coming from the database
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err)); //not necessary
}); //this is a simple api call/fetch
//it is a route that I created (an api call)to fetch the notes

module.exports = router;
