let Numbers = {
    one:1,
    two:2,
    three:3,
    four:4,
    five:5,
    six:6
}

let user = {
    name: "Key",
    age: 23
}


const num = [1,2,3,4,5,6]



let word = Object.keys(Numbers)


word.forEach((x)=>{
    user[x] = Numbers[x] 
})

console.log(user)