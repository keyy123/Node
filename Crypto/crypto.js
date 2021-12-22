const {createHmac, Certificate} = require('crypto')
const {Buffer} = require("buffer")

const secret = '000000';
const hash = createHmac('sha256', secret).update('BOYS BE DUMB').digest('base64')
console.log(hash)

const spkac = "Hello";
console.log(Certificate.verifySpkac(Buffer.from(spkac)))