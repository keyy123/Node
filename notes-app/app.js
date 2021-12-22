const chalk = require('chalk')
const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: (argv)=>{
        notes.b(argv.title, argv.body)
    },
    builder:{
        title: {
            describe: 'Note Title',
            type: String,
            demandOption: true
        },
        body:{
            describe:'Note Body',
            type:String,
            demandOption: true
        }
    }
    
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: (argv)=>{
        notes.c(argv.title)
    },
    builder:{
        title:{
            describe: 'Note Title',
            type: String,
            demandOption:true
        }
    }
})

yargs.command({
    command:'list',
    describe: 'list all notes',
    handler: ()=>{
        notes.d()
    }
})

yargs.command({
    command:'read',
    describe: 'Reads a note',
    handler: (argv)=>{
        notes.e(argv.title)
    },
    builder:{
        title:{
            type:string,
            demandOption:true,
            describe: "Note title"
        }
    }
})



yargs.parse()