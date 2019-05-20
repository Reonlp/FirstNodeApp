const yargs = require('yargs');
const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');

//Create add command;
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: "Adding a todo note",
        demandOption: true,
        type: 'string'
      }
  },
  handler: function(argv){
    notes.addNote(argv.title, argv.body);
  }
});

//Remove note command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
  }
});

//List command
yargs.command({
  command: 'list',
  describe: 'List all your  notes',
  handler: function(){
    notes.showAllNotes();
  }
});

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(){
    console.log("Reading a note");
  }
});

yargs.parse();
