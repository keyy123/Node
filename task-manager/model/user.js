const {Schema, model} = require('mongoose')
const {contains} = require('validator')

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
        //This is the validate option using the function 
        validate(value){
            if(contains(value, "password",{ignoreCase: true, minOccurrences:1})){
                throw new Error('The password should not contain password in it, try again')
            }
        },
    // This is validate containing an object {} - with the validator property
    //     validate: {
    //         validator: (value) =>{
    //         if(contains(value, "password",{ignoreCase:true, minOccurrences: 1})){
    //             throw new Error('The password should not contain password in it, try again')
    //         }
    //     }
    // },
        required:true,
        lowercase:true,
        trim: true
    }
})

const User = new model('User', UserSchema)

// const Guest = new User({
//     password: "1234567"
// })

// Guest.save().then(()=>{
//     console.log(Guest)
// }).catch((error)=>{
//     console.error(error);
// })
//This shoould be in controllers or in express server

module.exports = User