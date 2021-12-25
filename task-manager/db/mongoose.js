const { connect, model, Schema} = require('mongoose')
const {contains} = require('validator')


connect('mongodb://127.0.0.1:27017/task-manager-api',{})

const UserSchema = new Schema({
    name: {
        type:String, 
        default: "Guest"
    },
    age: {
        type: Number, 
        default: 1
    },
    password:{
        type: String,
        minlength: [7, "The password is too short"],
        trim: true,
        validate(value){
            if(contains(value, "password",{ignoreCase:true, minOccurrences: 1})){
                throw new Error('The password should not contain password in it, try again')
            }
        },
        required:true

    }
})

const User = new model('User', UserSchema)

const Guest = new User({
    password: "1passwordfdjkfhalfaj"
})

Guest.save().then(()=>{
    console.log(Guest)
}).catch((error)=>{
    console.error(error);
})


// const me = new User({
//     name:"Khayyon", 
//     age: 24
// })

// me.save().then(()=>{
// console.log(me)
// }).catch((error)=>{
// console.error({error: error});
// })

// const TaskSchema = new Schema({
//     details: {
//         type: String,
//         trim:true,
//         lowercase:true,
//         minlength: [3, 'Must be at least 3 letters, got {VALUE} ']
//     },
//     done: {
//         type: String, 
//         required: [true, 'Tell us if the task is done or not, got {VALUE}'],
//         validate(value){
//             if(!(equals(value, "true") || equals(value, "false"))){
//                 throw new Error(`This ain\'t it, we need a boolean not a ${value}!`)
//             }
//         }
//     }
// })

// const Tasks = new model('Tasks', TaskSchema)

// const myTasks = new Tasks({
//     details: "Workout",
//     done: "false"

// })

// myTasks.save().then(()=>{
//     console.log(myTasks)
// }).catch((error)=>{
//     console.error(error);
// })