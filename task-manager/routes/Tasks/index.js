const {Router} = require('express')
const router = Router()
const Task = require('../../model/task')
const auth = require('../../middleware/auth')

router.post("/tasks", auth, async (req, res)=>{
    // const newTask = new Task(req.body)
    const newTask = new Task({
        ...req.body,
        owner: req.user._id
    })
    try{
    await newTask.save()
    res.send(newTask)
    }catch(e){
        res.status(500).send()
    }
    })
    
    
    //Task GET endpoints
    router.get("/tasks", auth, async (req,res)=>{
        // Task.find({}).then((tasks)=>{
        //     if(!tasks){
        //         res.status(404).send()
        //     }
        //     res.status(200).send(tasks)
        // }).catch((error)=>{
        //     res.status(404).send(error)
        // })
        try{
            const allTasks = await Task.find({owner:req.user._id})
            //alternative 
            //await req.user.populate('tasks')
            //res.send(req.user.tasks)
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
    
    router.get("/tasks/:id", auth,  async (req, res)=>{
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
            //const oneTask = await Task.findById(id)
            const oneTask = await Task.findOne({id, owner: req.user._id}) 
            if(!oneTask){
                res.status(404).send()
            }
            res.send(oneTask)
        }catch(e){
            res.status(500).send()
        }
    })
    
    
    router.patch("/tasks/:id", auth, async(req, res)=>{
        try{
            let updates = Object.keys(req.body)
            let allowedUpdates = ["details", "done"]
            let isTrue = updates.every((update)=> allowedUpdates.includes(update))
            // const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidator:true})
            // const task = await Task.findById(req.params.id)
            const task = await Task.findOne({_id:req.params.id, owner:req.user._id})
            if(!task){
                return res.status(404).send()
            }
            if(!isTrue){
                return res.status(400).send()
            }
            updates.forEach((update)=>{
                task[update] = req.body[update]
            })
            await task.save()
            res.send(task)
        }catch(e){
    res.status(400).send(e)
    console.log(e)
        }
    })
    
    router.delete("/tasks/:id", auth, async(req,res)=>{
        try{
            // const task = await Task.findByIdAndDelete(req.params.id)
            const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})
            if(!task){
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(400).send(e)
        }
    })

    module.exports = router
    