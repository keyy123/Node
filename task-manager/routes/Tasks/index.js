const {Router} = require('express')
const router = Router()
const Task = require('../../model/task')

router.post("/tasks", async (req, res)=>{
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
            return res.status(400).send()
        }
    await newTask.save()
    res.send(newTask)
    }catch(e){
        res.status(500).send()
    }
    })
    
    
    //Task GET endpoints
    router.get("/tasks", async (req,res)=>{
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
    
    router.get("/tasks/:id", async (req, res)=>{
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
    
    
    router.patch("/tasks/:id", async(req, res)=>{
        try{
            let updates = Object.keys(req.body)
            let allowedUpdates = ["details", "done"]
            let isTrue = updates.every((update)=> allowedUpdates.includes(update))
            // const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidator:true})
            const task = await Task.findById(req.params.id)
            updates.forEach((update)=>{
                task[update] = req.body[update]
            })
            await task.save()
            if(!isTrue){
                return res.status(400).send()
            }
            if(!task){
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
    res.status(400).send(e)
    console.log(e)
        }
    })
    
    router.delete("/tasks/:id", async(req,res)=>{
        try{
            const task = await Task.findByIdAndDelete(req.params.id)
            if(!task){
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(400).send(e)
        }
    })

    module.exports = router
    