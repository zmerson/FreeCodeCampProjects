const express = require('express')
const router = express.Router();

const { // these are callback functions that we wrote in another file.
    
    //with this, we can add functionality to a route with a variable name.
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')


//we added the router in app.js with the line 'app.use('api/people', people)'
//original line before base url: router.get('/api/people', (req, res) => {

/*  initial way to set up routes

 router.get('/',getPeople) //response is handled with controller
 router.post('/', createPerson)
 router.post('/postman', createPersonPostman)
 router.put('/:id', updatePostman)
 router.delete('/:id',deletePerson)

  same functionality as above in fewer lines of code */


router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router