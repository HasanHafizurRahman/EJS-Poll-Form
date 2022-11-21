const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.set("view engine", "ejs")

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/create', (req,res) => {
    res.render("createPoll")
})
app.get('/', (req,res) => {
    res.render("home")
})



mongoose.connect('mongodb+srv://hasanshanto:ZvFsDdMVaqeQSQiY@cluster0.hogcfmx.mongodb.net/?retryWrites=true&w=majority')

.then((result) => {
    app.listen(5000, () => {
        console.log(`application running on port 5000`);
    })
}).catch((err) => {
    console.log(err);
});