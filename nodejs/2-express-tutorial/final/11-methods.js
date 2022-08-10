const express = require('express')
const { restart } = require('nodemon')
const app = express()
let {people} = require('./data')


app.use(express.static('./methods-public')) //static assets
app.use(express.urlencoded({extended: false})) //parses form data
app.use(express.json() )//parses incoming json requests and puts the parsed data in req.body

//the next example will abstract these methods with a route controller
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})
app.post('/api/people', (req,res) => {
    const {name} = req.body //req.body comes from the middleware 'app.use(express.json())' https://masteringjs.io/tutorials/express/express-json
    if(!name){
        return res.status(400).json({success:false,msg:'invalid entry'})
    }
    console.log('posting');
    res.status(201).send({success:true,person:name})
})

app.post('/api/postman/people', (req,res) => {
    const {name} = req.body 
    if(!name){
        return res.status(400).json({success:false,msg:'detected empty field'})
    }
    console.log('postman posted');
    res.status(201).send({success:true,data:[...people, name]})
})
app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name){
        return res.status(201).send(`Welcome ${name}`)
    }

    console.log(req.body)
    res.status(401).send('enter login info')
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id ===Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person matches the id ${id}`})
    }
    //console.log(`I putted id:${id} and name:${name}`)
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
        res.status(200).json({success:true, data:newPeople})
})
app.delete('/api/people/:id', (req, res) => {
    
    const person = people.find((person) => person.id ===Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false,msg:`no person matches the id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success:true, data: newPeople  })
})
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
