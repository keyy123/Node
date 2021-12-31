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

// const JWT = require('jsonwebtoken')

// const work = async() => {

// const key = "me-777"
// const token = await JWT.sign({
//  data: key 
// }, 
// 'secret',
// {expiresIn:'1h'})
// if(!token){
//    throw new Error("Unable to login")
// }
// console.log(token)
// let verifiedToken = await JWT.verify(token, 'secret')
// if(!verifiedToken){
//    throw new Error('Unable to login')
// }
// console.log(verifiedToken)
// let decodedToken = await JWT.decode(token, {complete:true})
// if(!decodedToken){
// throw new Error('Unable to login')
// }
// console.log(decodedToken.header, decodedToken.payload)
// console.log(decodedToken.payload.data === verifiedToken.data)
// }
// work()