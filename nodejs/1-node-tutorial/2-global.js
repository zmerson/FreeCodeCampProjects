// Globals -- NO WINDOW variabe!!

//__dirname -path to current directory
//__filename-file name
//require -  funtion to use modules (commonjs)

//process -  info about env where the program is being executed

console.log(process)
console.log(module)
console.log(__dirname)
console.log(__filename)
console.log(__dirname)

setInterval(() => {
  console.log('hello world')
}, 1000)

/*
function helloWorld(time){
setInterval(() => {
    console.log('hello world')
}, time)
}
setTimeout(helloWorld(1000), 1000)
*/