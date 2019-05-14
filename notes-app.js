//const fs = require('fs');
//writeFileSync();
//appendFileSync();
//fs.writeFileSync('notes.txt', 'this file was created by node.js and ' + name);
//fs.appendFileSync('notes.txt', '\nmy name is: ' + name);

//load files
const yargs = require('yargs');
const validator = require('validator');
//const add = require('./utils.js');
const notas = require('./notes.js');
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
    console.log("Title: " + argv.title + "\nTodo: " + argv.body);
  }
});

//Remove note command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function(){
    console.log('Removing the note');
  }
});

//List command
yargs.command({
  command: 'list',
  describe: 'List all your  notes',
  handler: function(){
    console.log("Listing out all notes");
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
