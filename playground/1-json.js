const fs = require('fs')
// const book = {
// title: 'Ego is the enemy',
// author: 'Ryan Holiday'
// }

// //JSON.stringify: JS Object => JSON String
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)


// //JSON.parse: JSON String => JS Object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// //To write JSON to our filesystem - we will use the core module 'fs' with a method we've used to maek a JSON file
// fs.writeFileSync('1-json.json',bookJSON)




const Buffer = fs.readFileSync('1-json.json')
const JSONString = Buffer.toString()
const JSObj = JSON.parse(JSONString)
JSObj.name ="Khayyon"
JSObj.age=23
const data = JSON.stringify(JSObj)
fs.writeFileSync('1-json.json',data)
console.log(data)
