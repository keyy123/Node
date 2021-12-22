const fs = require('fs');
const readline = require('readline');

async function readFile(){
    const file = fs.createReadStream('input.txt')

    const rl = readline.createInterface({
        input: file,
        crlfDelay: Infinity
    })

    for await (const line of rl){
        console.log(`This line says: ${line}`)
    }
}
readFile();