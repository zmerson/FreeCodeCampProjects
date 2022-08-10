let {people} = require('../data')

const getPeople = (req, res)  => {
    res.status(200).json({success: true, data: people})
} 

const createPerson = (req,res) => {
    const {name} = req.body //req.body comes from the middleware 'app.use(express.json())' https://masteringjs.io/tutorials/express/express-json
    if(!name){
        return res.status(400).json({success:false,msg:'invalid entry'})
    }
    console.log('posting');
    res.status(201).send({success:true,person:name})
}

const createPersonPostman = (req,res) => {
    const {name} = req.body //req.body comes from the middleware 'app.use(express.json())' https://masteringjs.io/tutorials/express/express-json
    if(!name){
        return res.status(400).json({success:false,msg:'detected empty field'})
    }
    console.log('postman posted');
    res.status(201).send({success:true,data:[...people, name]})
}
const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id ===Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false,msg:`no person matches the id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success:true, data: newPeople  })
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
}