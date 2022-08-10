const express = require('express')
const { restart } = require('nodemon')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use('/', (res,req) => { 
  res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
})
app.use('/api/people', people) // for all routes with base 'api/people', use the people module we created in the routes folder
app.use('/login', auth, () =>{
    console.log('login module loaded')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// app.use(express.static('./methods-public')) //static assets
// app.use(express.urlencoded({extended: false})) //parses form data
// app.use(express.json() )//parses incoming json requests and puts the parsed data in req.body
