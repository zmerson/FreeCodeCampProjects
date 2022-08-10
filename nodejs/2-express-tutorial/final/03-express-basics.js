//const app = require("express") does both of those lines in only one
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
        console.log('user visited home page')
        res.status(200).send('Home page')
    })//callback function is invoked every time user visits page '/'

app.get('/about', (req,res) => {
    res.status(200).send('About page')
})
//all refers to the http verb; every http verb
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
    })

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
});


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen