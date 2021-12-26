const express = require('express')
const app = express()
require('./db/mongoose') //import mongoose connection so it runs when express server runs
const User = require('./model/user') //imports user model for use in express server

const port = process.env.PORT || 3001

app.use(express.json()) //allows us to receive req.body as json

app.get("/", (req, res)=>{
    res.send("Welcome to Express")
})

// app.get("/users/:id", (req,res)=>{
//         res.send(req.query)
// })

app.post("/users", (req,res)=>{
    const newUser = new User(req.body)
    newUser.save().then(()=>{
        res.status(201).send(newUser)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})