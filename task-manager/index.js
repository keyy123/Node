const express = require('express')
const app = express()
require('./db/mongoose') //import mongoose connection so it runs when express server runs
const User = require('./model/user') //imports user model for use in express server
const Task = require('./model/task')
const port = process.env.PORT || 3001

app.use(express.json()) //allows us to receive req.body as json

app.get("/", (req, res)=>{
    res.send("Welcome to Express")
})

app.get("/users/:id", (req,res)=>{
        res.send(req.query)
})

app.get("/users", (req, res)=>{
   User.find(req.body).then((users)=>{
        res.send(users)
    }).catch((error)=>{
        res.status(404).send(error)
    })
    
    //res.status(200).send(users)
})

app.get("/users/:id", (req, res)=>{
   let id = req.params.id
    // User.findOne({_id:id}).then((user)=>{
    //     res.status(200).send(user)
    // }).catch((error)=>{
    //     res.status(404).send(error)
    // })

    //Both works but findbyid works with a little less thought but its preference I guess
    User.findById(id).then((user)=>{
        res.status(200).send(user)
    }).catch((error)=>{
        res.status(404).send(error)
    })
})

app.post("/users", (req,res)=>{
    const newUser = new User(req.body)
    newUser.save().then((user)=>{
        res.status(201).send(user)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

//Using a param for .then or w/o param works 


app.post("/tasks", (req, res)=>{
const newTask = new Task(req.body)
newTask.save().then(()=>{
res.status(201).send(newTask)
}
).catch((error)=>{
res.status(400).send(error)
})
})


//Task GET endpoints
app.get("/tasks", (req,res)=>{
    Task.find({}).then((tasks)=>{
        res.status(200).send(tasks)
    }).catch((error)=>{
        res.status(404).send(error)
    })
})

app.get("/tasks/:id", (req, res)=>{
    console.log(req.params)
    let id = req.params.id
    Task.findById(id).then((task)=>{
        res.status(200).send(task)
    }).catch((error)=>{
        res.status(404).send(error)
    })
})





app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})