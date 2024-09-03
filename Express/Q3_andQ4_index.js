const express =require('express');

const app  = express();

const PORT  = 4011;
const HOSTNAME = 'localhost';

app.get('/', (req, res) =>{
res.send("I am homepage");
})

app.get('/about', (req, res) =>{
res.send("I am about page");
})

app.get('/contact', (req, res) =>{
res.send("suppot@pwskills.com");
})

// ... ... ... ... << Q4 >> ... ... ... ... ...

app.get('/random',(req,res) =>{
    res.send({
        'random' : Math.floor(Math.random() * 100 + 1)
    })
})
app.listen(PORT,(req, res)=>{
    console.log(`Server running at ${HOSTNAME} : ${PORT}`);
})