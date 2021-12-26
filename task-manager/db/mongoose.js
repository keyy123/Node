const { connect, model, Schema} = require('mongoose')
const {contains, equals} = require('validator')


connect('mongodb://127.0.0.1:27017/task-manager-api',{})


// const myTasks = new Tasks({
//     details: "Cooking dinner"
// })

// myTasks.save().then(()=>{
//     console.log(myTasks)
// }).catch((error)=>{
//     console.error(error);
// })