


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
    
    // db.collection('users').findOne({_id:ObjectId("61ba6697a5582723a24ddc92")},(error, result)=>{
    //     if(error){
    //         return console.log(`Unable to find tasks that was done`)
    //     }
    //     return console.log(`${Object.entries(result)}`)
    // })

    db.collection('users').find({ $or:[{name:/K/},{name:/T/}, ]}).toArray((error, result)=>{

        console.log(result)
    })

})
