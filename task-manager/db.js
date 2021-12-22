


const chalk = require('chalk')
const {MongoClient, ObjectId} = require('mongodb')
//const MongoClient = mongodb.MongoClient this is the same as above
const url = "mongodb://127.0.0.1:27017"
const dbName = "task-manager"



MongoClient.connect(url,{useNewUrlParser:true}, (error,client)=>{
    if(error){
        return console.log(chalk.bgRed(`Unable to link to database: ${error.message}`))
    }
    const db = client.db(dbName)
    
    // db.collection('tasks').insertMany([
    //     {task: "Clean Room", done: false},
    //     {task: "Buy Food", done: true},
    //     {task: "Shower", done: false},
    //     {task: "Hang up clean clothes", done: false},
    //     {task: "Workout", done: false}
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents into collection')
    //     }
    //     return console.log(`Inserted ${result.insertedCount} documents into collection`)
    // })

    db.collection('tasks').find({done:false}).toArray((error, result)=>{
        if(error){
            return console.log('Unable to find documents matching that query')
        }
        console.log(result)
    })

    db.collection('tasks').findOne(new ObjectId('61c2c9b366a650e7fe7a9cd7'), (error,result)=>{
        if(error){
            return console.log('Unable to find a document with that ID')
        }
        console.log(result)
    })

})
