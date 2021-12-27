require('../db/mongoose')
const Task = require('../model/task')

const id = "61c69d5561f82ba2335c5c31"
Task.findByIdAndDelete(id).then((task)=>{
    console.log(task)
    return Task.countDocuments({done:false}).then((undone)=>{
        console.log(undone)
    })
})