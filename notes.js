import chalk from 'chalk';
import fs from 'fs';
import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';

const getNotes = () => {
  return 'Your notes ... ';
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  // create new array that saves duplicate notes
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  if(notes.length>notesToKeep.length){
    console.log(chalk.green.inverse('Note removed !'));
    saveNotes(notesToKeep);
  }else{
    console.log(chalk.red.inverse('No note found !'));
  }

    // for(let i=0;i < notesToKeep.length;i++){
  //   if (notesToKeep[i].title === title) {
  //     console.log(chalk.green.inverse('Note removed'));
  //   } else {
  //     console.log(chalk.red.inverse('No note found'));
  //     break;
  //   }
  // }
}; 

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('note.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('note.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const exportedFunction = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
};

export default exportedFunction;
