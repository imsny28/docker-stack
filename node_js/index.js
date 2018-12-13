// Dependencies
const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Map global promise - get rid of warning
 mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://mongo:27017/mydb', { useNewUrlParser: true })
.then(()=>console.log('connected..'))
.catch(err=>console.log(err));

// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// app.set('views', 'some/path/')

// Body parser middle
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Home Index Route
app.get('/', (req, res)=>{
  const title = "Home"
 res.render("Index", {
   title
 });
});

// Idea Index page
app.get('/ideas', (req, res)=>{
  Idea.find({})
  .sort({date:'desc'})
  .then(ideas => {
    res.render('ideas/index', {
      ideas: ideas
    });
  });
});

// Add Idea Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

// edit Idea Form
app.get('/ideas/:id/edit', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  })
  .then(idea => {
    res.render('ideas/edit',{
      idea: idea
    });
  })
});

// Process Form
app.post('/ideas', (req, res)=>{
  let errors = [];
  if(!req.body.title) {
    errors.push({text: 'Please add a title'});
  }

  if(!req.body.details) {
    errors.push({text: 'Please add some details'});
  }

  if(errors.length > 0) {
    res.render('ideas/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    });

  } else {
    const newUser = {
      title: req.body.title,
      details: req.body.details
    }

    new Idea(newUser).save().then(idea =>{
      res.redirect('/ideas');
    });
  }
});

// About Route
app.get('/about', (req, res)=>{
  res.render("About");
});

app.listen(port, ()=>{
  console.log(`Server stated on port ${port}`);
});
