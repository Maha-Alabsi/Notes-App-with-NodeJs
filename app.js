import exportedFunction from './notes.js';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
console.log(process.argv);
const yargsNew = command =>
  yargs(hideBin(process.argv)).command(command).demandCommand(1).argv;

yargsNew({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'This is the note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // console.log(chalk.blue.bold('Adding a new note!'), argv);
    // console.log(chalk.bgGreen.inverse('Title: ' + argv.title));
    // console.log(chalk.bgYellow.inverse('Body: ' + argv.body));
    exportedFunction.addNotes(argv.title, argv.body);
  },
});
yargsNew({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    exportedFunction.removeNote(argv.title);
  },
});
yargsNew({
  command: 'list',
  describe: 'Remove a note',
  handler() {
    console.log(chalk.yellow.bold('List the note!'));
    exportedFunction.listNote();
  },
});
yargsNew({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: 'Read a note',
    demandOption: true
  },
  handler(argv) {
    exportedFunction.readNote(argv.title);
  },
});

yargs().parse();

// // import { writeFileSync } from 'fs';
// // import {appendFileSync} from 'fs';
// // writeFileSync('notes.txt','My name is Maha ,I love reading,writing and making desert \n')
// // appendFileSync('notes.txt','Reem is my sister')
// // import name from  './utils.js'
// import add from './utils.js'
// console.log('app')
// // console.log(name);

// const sum=add(1,3)
// console.log(`The sum is ${sum}`)

// import getNote from './notes.js';
// import validator from 'validator';
// console.log();

// const msg = getNote('Hello world! How are you');
// console.log(msg);
// console.log(validator.isEmail('maha@gmail.com'))
// console.log(validator.isURL('smeafg-.uh'))
// const mej=chalk.italic.inverse.blue.bold.bgWhite('Hello Maha')
// console.log(mej)

// console.log(chalk.yellow(process.argv));

// const command = process.argv[2];
// if (command === 'add') {
//   console.log(chalk.red('Adding note'));
// //   console.log(yargs.argv)
// } else if (command === 'remove') {
//   console.log(chalk.green('Deleting note'));
// }
