const fs = require('fs');
const chalk = require('chalk');

const getNotes = function getNotes(){
    return "Your notes...";
}

//ADDING A NEW NOTE
const addNote = function(title, body){
  const notes = loadNotes();

  //Filter will loop through all the array, that's why is preferable in this case to use find
  /*const duplicateNotes = notes.filter(function(note){
    return note.title === title
  });*/

  //It will return undefined if a match is not found
  const duplicateNote = notes.find((note) => note.title === title);

  if(duplicateNote === undefined){
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log('Note title taken');
  }
}

//Writing notes into a json file
const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

//Reading notes and loading them into an array
const loadNotes = function(){
  try{

    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch (e){
    return []
  }

}

//READ NOTE
const readNote = function(title){
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("No note was found"));
  }
}

//REMOVE NOTE
const removeNote = function(title){
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note){
    return note.title !== title;
  });

  saveNotes(notesToKeep);

  if(notes.length === notesToKeep.length){
    console.log(chalk.red.inverse("note not found"));
  } else {
    console.log(chalk.green.inverse("note removed successfully"));
  }
}

//LISTIN ALL NOTES
const listNotes = function(){
  const notes = loadNotes();

  console.log(chalk.inverse('Your notes'));

  notes.forEach((note) => {
    console.log(note.title);
  })
}

//SHOWING ALL NOTES
const showAllNotes = function(){
  const notes = loadNotes();
  if(Array.isArray(notes) && notes.length === 0){
    console.log("You don't have any note");
  } else {
    for(let i = 0; i < notes.length; i++){
      console.log(chalk.green.inverse(notes[i].title));
    }
  }

  //forEach version
  /*notes.forEach((note) => {
    console.log(note.title);
  });*/
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  showAllNotes: showAllNotes,
  listNotes: listNotes,
  readNote: readNote
}
