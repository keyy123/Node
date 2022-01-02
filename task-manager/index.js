const express = require('express')
const app = express()
require('./db/mongoose') 
const User = require('./model/user') 
const Task = require('./model/task')
const port = process.env.PORT || 3001
const routes = require('./routes/index')

// app.use((req,res,next)=>{
//    // console.log(req.method, req.path )
//    // next() //tell express that we are donw with the middleware
//    if(req.method === 'GET'){
//       res.send('GET requests are disabled')
//    }else{
//       next() //run routes and ends middleware fxn
//    }
// })

// app.use((req, res, next)=>{
//    res.status(503).send('Sorry. We\'re doing some olympic level spring cleaning around the server. It might take a while...')
// })

app.use(express.json()) 
app.use('/',routes)


app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})

const main = async() => {
// const task = await Task.findById("61d0e8f6f30e835a790566ed")
// await task.populate('owner')
// console.log(task)

const user = await User.findById("61d0e86d1e4aa5e99d758070")
await user.populate("tasks")
console.log(user.tasks)
}

main()