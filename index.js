const express = require('express');
const path = require('path');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    // res.send("Live!")
    res.render("index");
})

app.get('/profile/:username',function(req,res){
    let abv = req.params.username
    // res.send('colon kay bad wali chez variable ha, dynamic route create kia ha')
    res.send(`Welcome ${abv}`);
})

app.get('/about/:person/:bio',function(req,res){
    let person = req.params.person
    let bio = req.params.bio
    res.send(`Mr/Mrs. ${person} is ${bio}.`)
})
app.listen(3000,function(params) {
    console.log("workkk")
})
