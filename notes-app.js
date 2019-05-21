const yargs = require('yargs');
const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');

//CREATE A NOTE COMMAND
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

//REMOVE A NOTE COMMAND
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

//LIST COMMAND
yargs.command({
  command: 'list',
  describe: 'List all your  notes',
  handler: function(){
    notes.showAllNotes();
  }
});

//READ COMMAND
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.readNote(argv.title);
  }
});

yargs.parse();
