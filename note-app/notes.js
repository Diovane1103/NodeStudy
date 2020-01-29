
const fs = require('fs')
const chalk = require('chalk')

class Notes{
    addNote(title, body) {
        const notes = JSON.parse(this.listNotes())

        debugger

        if(notes.filter(note => note.title === title).length === 0) {
            notes.push(createNote(title, body))
            saveNotes(notes)
            console.log(chalk.green.inverse.bold('New note added!'))
        } else {
            console.log(chalk.red.inverse.bold('This title is already in use!!'))
        }
    }

    removeNote(title) {
        const notes = JSON.parse(this.listNotes())
        const notesToKeep = notes.filter(note => note.title !== title)
        if(notesToKeep.length < notes.length) {
            saveNotes(notesToKeep)
            console.log(chalk.green.inverse.bold('Note removed!'))
        } else {
            console.log(chalk.red.inverse.bold('Note not found!'))
        }
    }

    readNote(title) {
        const noteToRead = JSON.parse(this.listNotes()).filter(note => note.title === title)
        if(noteToRead.length !== 0) {
            return chalk.green.inverse.bold(JSON.stringify(noteToRead))
        } else {
            return chalk.red.inverse.bold('Note not found!')
        }
    }

    listNotes() {
        return fs.readFileSync('notes.json').toString()
    }
}

const createNote = (title, body) => {
    return {
        title: title,
        body: body
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = new Notes()