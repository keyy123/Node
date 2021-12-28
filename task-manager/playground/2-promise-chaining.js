// require('../db/mongoose')
// const Task = require('../model/task')

// const id = "61c69d5561f82ba2335c5c31"
// // Task.findByIdAndDelete(id).then((task)=>{
// //     console.log(task)
// //     return Task.countDocuments({done:false}).then((undone)=>{
// //         console.log(undone)
// //     })
// // }).catch((e)=>{
// //     console.log(e)
// // })

// const deleteTasks = async (id) => {
//     const deletedTask = await Task.findByIdAndDelete(id)
//     const remainingTasks = await Task.countDocuments({done:false})
//     return remainingTasks
// }

// deleteTasks(id).then((count)=>{
//     if(!count || count <= 0){
//         console.log('No documents found')
//     }
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })



// deleteTasks(id)