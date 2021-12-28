const express = require('express')
const app = express()
require('./db/mongoose') 
const User = require('./model/user') 
const Task = require('./model/task')
const port = process.env.PORT || 3001

app.use(express.json()) 

app.get("/", (req, res)=>{
    res.send("Welcome to Express")
})


app.get("/users", async (req, res)=>{
try{
    const users = await User.find(req.body);
if(!users){
    res.status(404).send();
}
res.status(200).send(users);
}catch(e){
    res.status(404).send(e);
}
})


app.get("/users/:id", async(req,res)=> {
    let id = req.params.id;
    try{
        const user = await User.findById(id)
        console.log(user)
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})





app.post("/users", async (req,res)=>{
    const newUser = new User(req.body)
    // newUser.save().then((user)=>{
    //     if(!user){
    //         res.status(400).send()
    //     }
    //     res.status(201).send(user)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
try{
if(!newUser){
    res.status(400).send()
}
await newUser.save()
res.status(201).send(newUser)
}catch(e){
    res.status(400).send(e)
}
})

//Using a param for .then or w/o param works 

//Task Routes
app.post("/tasks", async (req, res)=>{
// const newTask = new Task(req.body)
// newTask.save().then(()=>{
//     if(!newTask){
//         res.status(400).send()
//     }
// res.status(201).send(newTask)
// }
// ).catch((error)=>{
// res.status(400).send(error)
// })
const newTask = new Task(req.body)
try{
    if(!newTask){
        res.status(400).send()
    }
await newTask.save()
res.send(newTask)
}catch(e){
    res.status(500).send()
}
})


//Task GET endpoints
app.get("/tasks", async (req,res)=>{
    // Task.find({}).then((tasks)=>{
    //     if(!tasks){
    //         res.status(404).send()
    //     }
    //     res.status(200).send(tasks)
    // }).catch((error)=>{
    //     res.status(404).send(error)
    // })
    try{
        const allTasks = await Task.find({})
        const taskCount = await Task.countDocuments({})
        console.log(taskCount)
        if(!allTasks){
            res.status(404).send()
        }
        res.status(200).send(allTasks)
    }catch(e){
        res.status(500).send()
    }
})

app.get("/tasks/:id", async (req, res)=>{
    let id = req.params.id
    // Task.findById(id).then((task)=>{
    //     if(!task){
    //         res.status(404).send()
    //     }
    //     res.status(200).send(task)
    // }).catch((error)=>{
    //     res.status(404).send(error)
    // })

    try{
        const oneTask = await Task.findById(id)
        if(!oneTask){
            res.status(404).send()
        }
        res.send(oneTask)
    }catch(e){
        res.status(500).send()
    }
})





app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})