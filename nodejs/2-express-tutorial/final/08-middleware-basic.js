const express = require('express')
const app = express()

//  req => middleware => res
//this is a simple middleware function.
//we move it to a different file in future iterations: ./logger.js
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => { //we can replace the logger parameter with one line "app.use(logger)"
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
