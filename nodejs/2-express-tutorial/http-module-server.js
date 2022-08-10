//server with only http module
//this will look bad when you have a lot of resources

const http = require('http')
const {readFileSync, readFile} = require('fs');
//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//4hr 5min on video he explains this line
const server = http.createServer((request, response)=>{
    const url = request.url;

    //console.log(request.url)
    if (url ==='/') {
    response.writeHead(200, {'content-type':'text/html'}) //"text/plain" won't recognize html
    response.write(homePage) 
    response.end();
    }
    else if (url ==='/about') {
        response.writeHead(200, {'content-type':'text/html'}) //"text/plain" won't recognize html
        response.write('<h2>about page from JS file</h2> <embed type="image/jpg" src="fileS:/codestuff/freeCodeCamp/nodejs2/node-express-course-main/02-express-tutorial/test.jpg" width="300" height="300">') 
        response.end();
    }
    else if (url ==='/styles.css') {
        response.writeHead(200, {'content-type':'text/css'}) 
        response.write(homeStyles) 
        response.end();
    }
    else if (url ==='/logo.svg') {
        response.writeHead(200, {'content-type':'text/svg+xml'}) 
        response.write(homeImage) 
        response.end();
    }
    else if (url ==='/browser-app.js') {
        response.writeHead(200, {'content-type':'text/svg+xml'}) 
        response.write(homeLogic) 
        response.end();
    }
    else {
        response.writeHead(404, {'content-type':'text/html'}) //"text/plain" won't recognize html
        response.write('<h2>page not found</h2>') 
        response.end();
    }
    console.log('user hit the server')
    //response.end() must be called on each response
    //response.end(`home page`)
})


server.listen(5000) 