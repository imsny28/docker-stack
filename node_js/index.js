// Dependencies
const express = require("express");
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Map global promise - get rid of warning
 mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://mongo:27017/mydb', { useNewUrlParser: true })
.then(()=>console.log('connected..'))
.catch(err=>console.log(err));

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// app.set('views', 'some/path/')

// Index Route
app.get('/', (req, res)=>{
  const title = "Home"
 res.render("Index", {
   title
 });
});

// About Route
app.get('/about', (req, res)=>{
  res.render("About");
});

app.listen(port, ()=>{
  console.log(`Server stated on port ${port}`);
});
