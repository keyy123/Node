const add = (a, b) => {
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
            resolve(a + b)
       },2000)
   })
}

//Basic Chaining =/= Promise Chaining - The intuitive idea to put a promise in a promise whihc works but with drawbacks
//We have the same error code and the more nested the data is the harder it'll be to maintain and/or refactor it



// add(1, 2).then((sum)=>{
//     add(sum, 2).then((summed)=>{
//         console.log(summed)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }).catch((error)=>{
//     console.log(error)
// })


//Promise Chaining - can allow infinite chaining and no duplicated error handlers
//You return another promise within the callback (then) and keep the chain going
add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum, 7)
    .then((sum2)=>{
        console.log(sum2)
        return add(sum2,8)
        .then((sum3)=>{
            console.log(sum3)
            return add(sum3,3).then((sum4)=>{
                console.log(sum4)
            })
        })
    })
}).catch((error)=>{
    console.log(error)
})