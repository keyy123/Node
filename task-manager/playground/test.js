// require('../db/mongoose.js')
// const User = require('../model/user')
// // User.findOneAndUpdate({name:"Guest"},{name:"BJ"}).then((user)=>{
// //     if(!user){
// //         res.status(404).send()
// //     }
// //     console.log(user)
// //     return User.countDocuments({name:"BJ"}).then((docs)=>{
// //         console.log(docs)
// //     })
// // }).catch((e)=>{
// //     console.log(e)
// // })

// const updateUserAndCount = async(query,name) =>{
//     const user = await User.findOneAndUpdate({query},{name})
//     const count = await User.countDocuments({name})
//     return count
// }

// updateUserAndCount({name:"BJ"},"Bryant Jr").then((count)=>{
//     if(!count){
//         console.log('Update was not successful')
//     }
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })