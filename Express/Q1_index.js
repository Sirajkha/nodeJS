const express = require('express');

const app  = express();
const PORT = 4021;
const HOSTNAME = 'localhost';

app.get('/',(req,res) =>{
    res.send("Welcome to Men and Women Dummy Data");
})

app.get('/men',(req,res) =>{
    res.json({
        'id' : "1",
        'product_name' : "Men's T-shirt",
        'brand': "HRX",
        'price':142.44,
        'quantity': 100,
        'image': "men_t-shirt.jpg",
        'size': "M",
        'color': "blue",
        'category': "Clothing",
        'description': "This is a men's T-shirt from HRX brand."
    });
})

app.get('/women',(req,res) =>{
    res.json({
        'id' : "2",
        'product_name' : "Women's Suit",
        'brand': "HRX",
        'price': 899.99,
        'quantity': 50,
        'image': "women_suit.jpg",
        'size': "XL",
        'color': "red",
        'category': "Clothing",
        'description': "This is a women's suit from HRX brand."
    });
})

app.get('/other',(req, res) =>{
    res.send("page not found");
})


app.listen(PORT,() =>{
    console.log(`Server running at ${HOSTNAME} : ${PORT}`);
    
})