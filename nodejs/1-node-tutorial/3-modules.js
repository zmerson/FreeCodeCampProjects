//CommonJs: by default, every file in node is a module
//modules are encapsulated code. shares only the minimum needed

//i put these in a different file, called names.js. we use the module
//const secret = 'SUPER SECRET'
//const john='john'
//const peter='peter'
//function sayhi


//to use a module, we set up 4-names.js to export the variables james and peter with module.exports = { john, peter }
//in the file we need it, we need to use require()
const names= require('./4-names')
console.log(names)

//heres another example with a function that uses the variables we imported with require()
const sayHi = require('./5-utils.js')
//i continue to practice using modules
const alt = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(alt)
console.log(alt.items)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)