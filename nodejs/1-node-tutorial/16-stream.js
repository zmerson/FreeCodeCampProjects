const {createReadStream}= require('fs')

//agruments: path, {options_argument1, options_argument2, etc..}
const stream = createReadStream('../content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'})

stream.on('data', (result)=> {
    console.log(result)
 })