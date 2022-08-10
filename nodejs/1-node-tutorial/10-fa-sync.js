const {readFileSync, writeFileSync} = require('fs');
const { dirname } = require('path');
//this does the same thing as "const fs = require('fs');"
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(dirname);
console.log(first, second)

//node will write a file or override it
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`,{flag:'a'})
//flag a means 'append'

console.log('file 10 has finished executing, entering next task')