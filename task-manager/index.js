const express = require('express')
const app = express()
require('./db/mongoose') 
const User = require('./model/user') 
const Task = require('./model/task')
const port = process.env.PORT || 3001
const routes = require('./routes/index')

app.use(express.json()) 
app.use('/',routes)


app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})

