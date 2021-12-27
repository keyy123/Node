require('../db/mongoose.js')
const User = require('../model/user')

User.findOneAndUpdate({name:"Guest"},{name:"BJ"}).then((user)=>{
    if(!user){
        res.status(404).send()
    }
    console.log(user)
    return User.countDocuments({name:"BJ"}).then((docs)=>{
        console.log(docs)
    })
}).catch((e)=>{
    console.log(e)
})