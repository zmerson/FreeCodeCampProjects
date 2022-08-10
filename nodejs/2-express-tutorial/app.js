const express = require('express')
//const router = express.Router()
const app = express()


const people = require('./routes/people')
const auth = require('./routes/auth')


//app.use(express.static('./methods-public'))
// app.use('/', home, () => { 
//     console.log("home page hit")
//   })

app.use('/api/people', people) // for all routes with base 'api/people', use the people module we created in the routes folder
app.use('/login', auth, () =>{
    console.log('login module loaded')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
