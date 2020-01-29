const utils = require('./utils.js')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note, necessary pass title and body of the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note, necessary pass the title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note, necessary pass the title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(notes.readNote(argv.title))
    }
})
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log(notes.listNotes())
    }
})
yargs.parse()