const doWorkCallBack = (callback) =>{
setTimeout(()=>{
//callback('This is my error', undefined) - This is an error-only cb which should return an error in 2 seconds
callback(undefined, [1,4,7,10]) //This is a callback with both an error and a result - we should see our result in 2 seeconds
},2000)
}

doWorkCallBack((error,result)=>{
if(error){
    return console.log(error)
}
console.log(result)
})

/*With callbacks, the order that we call them in is vital since cb(error, result) can change the 
the return value*/