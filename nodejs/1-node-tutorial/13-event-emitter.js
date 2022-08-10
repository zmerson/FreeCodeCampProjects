const { count } = require('console');
const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id)=> {
    console.log(`data recieved user name:${name} with id:${id}`);
})
customEmitter.on('response', ()=> {
    console.log('Add as many functions as you want here');
})
customEmitter.on('response', ()=> {
    console.log(`to do logic`);
})
console.log(c);
customEmitter.emit('response','zach',30);

