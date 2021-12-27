const add = (a, b) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            if(a < 0 || b < 0){
                return reject('Numbers must be non-negative')
            }
             resolve(a + b)
        },2000)
    })
 } 

const doWork = async() => {
// return 'Working!' //This is equivalent to resolve()
// throw new Error('Whoops') //This is equivalent to reject() 

const res = await add(3,2)
const res2 = await add(res,4)
const res3 = await add(res2, 3)
return res3
}

doWork().then((res)=>{
    console.log('result', res)
}).catch((e)=>{
    console.log('e', e)
})