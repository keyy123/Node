const doWorkPromise = new Promise((resolve, reject)=>{
//resolve and reject are like our error and result in mongoDB 
//resolve is the data we want to show if promise is successful
//reject is what we want to show if the promise fails/errors out
    setTimeout(()=>{
        //toggle the comment on resolve and run node on this file to see the power of promises
    resolve([1,4,7,10])
    reject('Things went awry')
},2000)
})

//a promise is an object with a bit more methods that we can use

doWorkPromise.then((x)=>{
//.then() is a method that lets us make a fxn that allows us to 
//access data if function is successful 
console.log('Success', x)
}).catch((err)=>{
    //.catch() is a method to show the error if promise fails
    console.error(err)
})