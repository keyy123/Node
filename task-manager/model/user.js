const {Schema, model} = require('mongoose')
const {contains} = require('validator')
const bcrypt = require('bcryptjs')

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

UserSchema.pre('save', async function(next){
const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
        console.log(user.password)
    }
next()
})
// UserSchema.pre('findByIdAndUpdate',{document:true, query: false}, async function(next){
//     console.log(this, 'updating')
//     next()
// })

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