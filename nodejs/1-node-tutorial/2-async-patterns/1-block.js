const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        // BLOCKING CODE !!!
        //this is synchronous instead of asyncronous
        //the page wont load until the stupid computer finsihes counting
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
            console.log(`${i} ${j}`);
            }
        }
        res.end('About Page')
    }
    else res.end("error page")
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
