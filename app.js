const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/myexpressapp');
const port = 80;
var Schema = new mongoose.Schema({
    name: String,
    age: String,
    number: String,
    email: String,
    password:String
  });

  const user = mongoose.model('user',Schema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const params = {};
    // const con = "This is a best content of the ever";
    // const param = { "title": "Pug templete", "content": con };
    res.status(202).render('home.pug', params);
});
app.get('/contact', (req, res) => {
    const params = {};
    res.status(202).render('contact.pug', params);
});

app.post('/contact', (req, res) => {
    new user({
        name:req.body.name,
        age:req.body.age,
        number:req.body.number,
        email:req.body.email,
        password:req.body.password
    }).save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    });
});

// app.get('/about', (req, res) => {
//     const param = {};
//     res.status(202).render('about.pug', param);
// });
// app.get('/service', (req, res) => {
//     const param = {};
//     res.status(202).render('service.pug', param);
// });
// app.get('/cell', (req, res) => {
//     const param = {};
//     res.status(202).render('cell.pug', param);
// });
app.listen(port, () => {
    console.log("your app is ready");
});

