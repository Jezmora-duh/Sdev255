const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

//middelware & Static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'omg hi', snippet:'Chupapimunano'},
        {title: 'How are u', snippet:'great'},
        {title: 'Good', snippet:'RIGHT'},
    ];   
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req,res) => {
    res.render('create', { title: 'Create new blog'});
});

//404 page-must go at the bottom
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});