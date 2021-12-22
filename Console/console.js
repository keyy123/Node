const {Console} = require('console')
const fs = require('fs')




let c = new Console({stdout:process.stdout,colorMode:false})



fs.writeFileSync('../Readline/input.txt',"Hello I like pie")

fs.appendFileSync('../Readline/input.txt', "No, I like cake")

c.log(5)