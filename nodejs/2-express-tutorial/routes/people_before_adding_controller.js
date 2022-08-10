//this file was stripped clean, the functionality is written in the controller
const express = require('express')
const router = express.Router();

let {people} = require('../data')

//we added the router in app.js with the line 'app.use('api/people', people)'
//original line from previous example before adding base url: router.get('/api/people', (req, res) => {
router.get('/', (req, res) => { 
    res.status(200).json({success:true,data:people})
})
router.post('/', (req,res) => {
    const {name} = req.body //req.body comes from the middleware 'app.use(express.json())' https://masteringjs.io/tutorials/express/express-json
    if(!name){
        return res.status(400).json({success:false,msg:'invalid entry'})
    }
    console.log('posting');
    res.status(201).send({success:true,person:name})
})

router.post('/postman', (req,res) => {
    const {name} = req.body //req.body comes from the middleware 'app.use(express.json())' https://masteringjs.io/tutorials/express/express-json
    if(!name){
        return res.status(400).json({success:false,msg:'detected empty field'})
    }
    console.log('postman posted');
    res.status(201).send({success:true,data:[...people, name]})
})


router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    
    const person = people.find((person) => person.id ===Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false,msg:`no person matches the id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success:true, data: newPeople  })
})

module.exports = router