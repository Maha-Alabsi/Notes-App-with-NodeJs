import chalk from 'chalk';
import fs from 'fs';
// import { writeFileSync } from 'fs';
// import { readFileSync } from 'fs';

const addNotes = (title, body) => {
  const notes = loadNotes();
  // create new array that saves duplicate notes
  // const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNotes = notes.find(note => note.title === title);
  debugger
  if (!duplicateNotes) {
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
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed !'));
    saveNotes(notesToKeep);
  } else {
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

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.gray.white.inverse('Your Notes...'));
  notes.forEach(element => {
    console.log(chalk.blue(element.title));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const readnote = notes.find(note => note.title === title);
  if (readnote) {
    console.log(chalk.green(readnote.title + '  ' + readnote.body));
  } else {
    console.log(chalk.red('No note found'));
  }
};

const exportedFunction = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};

export default exportedFunction;
