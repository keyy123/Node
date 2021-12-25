const { connect, model, Schema} = require('mongoose')

connect('mongodb://127.0.0.1:27017/task-manager-api',{})

// const UserSchema = new Schema({
//     name: {type:String, default: "Guest"},
//     age: {type: Number, default: 1}
// })

// const User = new model('User', UserSchema)

// const me = new User({
//     name:"Khayyon", 
//     age: 24
// })

// me.save().then(()=>{
// console.log(me)
// }).catch((error)=>{
// console.error({error: error});
// })

const TaskSchema = new Schema({
    details: {type: String},
    done: {type: Boolean}
})

const Tasks = new model('Tasks', TaskSchema)

const myTasks = new Tasks({
    details: "Prepare Large Trash For Bulk Day",
    done: false
})

myTasks.save().then(()=>{
    console.log(myTasks)
}).catch((error)=>{
    console.error({error:error});
})