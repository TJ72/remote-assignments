const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getData', (req, res) => {
    const {number} = req.query;
    let num = Number(number);

    if (!number) {
        return res.send('<h1>Lack of Parameter</h1>');
    } else if (!Number.isInteger(num) || num <= 0) {
        return res.send('<h1>Wrong Parameter</h1>');
    } else {
        const sum = ((1 + num) * num) / 2;
        return res.send(`<h1>The sum of first ${num} integers is ${Number(sum)}</h1>`);
    }
});

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`<h1>Hello ${name}!</h1>`);
    } else {
        res.redirect('/trackName');
    }
});

app.get('/trackName', (req, res) => {
    const {name} = req.query;
    // const name = req.cookies.name;
    if (name) {
        res.cookie('name', name);
        res.redirect('/myName');
    } else {
        res.render('trackName');
    }
});

app.post('/trackName', (req, res) => {
    res.cookie('name', req.body.name);
    res.redirect('/myName');
});

app.listen(3000, () => {
    console.log('This application is running on localhost:3000!');
});