const express = require('express')
const app = express()
require('./db/mongoose') 
const User = require('./model/user') 
const Task = require('./model/task')
const port = process.env.PORT || 3001
const routes = require('./routes/index')
app.use(express.json()) 
app.use('/',routes)


app.listen(port, ()=>{
   return console.log(`listening to connection at http://localhost:${port}`)
})

const bcrypt = require('bcryptjs')

const work = async() => {
const pass = '123456789'
const hashPass = await bcrypt.hash(pass, 8,async(err, code)=>{
   if(err){
      return console.log('password not hashed')
   }
   console.log(pass)
   console.log(code)
   const Truth = await bcrypt.compare(pass, code, (error, value)=>{
      if(error){
         return console.log('could not compare password and hash')
      }
      console.log(`It is ${value}, The hash and password are the same`)
   })
},((num)=>{
   console.log(num)
}))
// const match = await bcrypt.compare(pass,code).then((value)=>{
//    console.log(value)
// }).catch((e)=>{
//    console.log(e)
// })
}

work()