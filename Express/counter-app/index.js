const express = require('express');

const app = express();

const PORT = 4013;
const HOSTNAME = 'localhost';

let counter = 0;

app.get('/',(req,res) =>{
    res.json({counter : counter});
})

// Route to increment the counter
 app.post('/increment', (req, res) => {
    counter += 1;
    res.json({ counter: counter });
  });
  
  // Route to decrement the counter
  app.post('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter: counter });
  });
  

app.listen(PORT,() =>{
    console.log(`counter app is running at ${HOSTNAME} : ${PORT} ` );
    
})