const express = require('express')
const router = express.Router();
//it doesn't authorize anything, it just says 'welcome '
router.post('/', (req, res) => {
    const {name} = req.body;
    if (name){
        return res.status(201).send(`Welcome ${name}`)
    }

    console.log(req.body)
    res.status(401).send('enter login info')
})

module.exports = router;