const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//DatabaseConnection
mongoose.connect('mongodb://test:test@ds121309.mlab.com:21309/bookstore');

//App
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(router);

// GoogleAnalytics
var expressGoogleAnalytics = require('express-google-analytics');
var analytics = expressGoogleAnalytics('UA-93976052-1');
app.use(analytics);

//Controllers
const authors = require('./controllers/authors.c')
const books = require('./controllers/books.c')
const categories = require('./controllers/categories.c')
const publishers = require('./controllers/publishers.c')
const users = require('./controllers/users.c')

//for PRO Controllers
const bookspopulate = require('./controllers/books.populate.c')
const booksauth = require('./controllers/books.auth.c')
const userlogin = require('./controllers/login.c')
const uploads = require('./controllers/uploads.c')

//Routes
app.use("/alperen/authors", authors);
app.use("/alperen/books", books);
app.use("/alperen/categories", categories);
app.use("/alperen/publishers", publishers);
app.use("/alperen/users", users);

//for PRO Routes
app.use("/alperen/bookspopulate", bookspopulate);
app.use("/alperen/booksauth", booksauth);
app.use("/alperen/userlogin", userlogin);
app.use("/alperen/uploads", uploads);


//Security - CORS (Cross Origin Resource Scripting)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});


//Start Service
app.listen(3001, () => {
    console.log('Bookstore RESTfull Pro on port 3001')
  })
  