const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes..."
}

const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    //.filter array works since notes is a array of objects - recall the return [] - all note objects 
    //are pushed into that empty array
    if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
    })
   saveNotes(notes)
   console.log(`New note added`)
}else{
    console.log('Note title taken!')
}
}

const saveNotes= (notes) =>{
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)

}

const loadNotes = () =>{
    try{
        const Buffer = fs.readFileSync('notes.json')
        const JSONString = Buffer.toString()
        return JSON.parse(JSONString)
    }catch(e){
        return []
    }
}

const removeNotes = (title) => {

    const notes = loadNotes()
    const removedNote = notes.filter(note => note.title === title)
    if(removedNote.length > 0){
     const leftOverNotes = notes.filter(note => note.title !== title)
     saveNotes(leftOverNotes)
     console.log(chalk.bgGreen(`Note with ${title} removed`, removedNote))
    }else{
        const notes = loadNotes()
        console.log(chalk.bgRed("There are not tasks with that title",notes.title))
    }

}


const listNotes = () => {
const notes = loadNotes()
console.log(notes.map(note =>{
    return note.title
}))
}


const readNote = (title) => {
const notes = loadNotes()
const FoundNote = notes.find(note => note.title === title)
if(FoundNote){
    console.log(chalk.bgGreen.inverse(`title:${FoundNote.title}`))
    console.log(`body:${FoundNote.body}`)
}else{
console.log(chalk.bgRed("No note found?"))
}
}

module.exports = {
    a:getNotes, 
    b:addNotes,
    c:removeNotes,
    d:listNotes,
    e:readNote

}