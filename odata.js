var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Resource = require('odata-resource');

//App
var app = express()
var router = express.Router()
app.use(bodyParser.json())

//DatabaseConnection
mongoose.connect('mongodb://test:test@ds121309.mlab.com:21309/bookstore');

//Schema-Models
var authors = require('./models/authors.m')
var books = require('./models/books.m')
var categories = require('./models/categories.m')
var publishers = require('./models/publishers.m')
var users = require('./models/users.m')
var uploads = require('./models/uploads.m')

//REST Resources
var authorsResource = new Resource({
  rel: '/alperen/authors',
  model: authors,
  count:true
});

var booksResource = new Resource({
    rel: '/alperen/books',
    model: books,
    count:true
  });
  
var bookspopulateResource = new Resource({
    rel: '/alperen/bookspopulate',
    model: books,
    $filter:"onSale eq true",
    $orderby:'-publishedDate',
    populate:({path:'rel_Publishers rel_Authors rel_Categories cover summary',
               select:'authorCode authorName authorLName categoryName publisherCode publisherName uploadLink -_id'}),
    count:true
  });

var categoriesResource = new Resource({
    rel: '/alperen/categories',
    model: categories,
    count:true
  });

var publishersResource = new Resource({
    rel: '/alperen/publishers',
    model: publishers,
    count:true
  });

var usersResource = new Resource({
    rel: '/alperen/users',
    model: users,
    count:true
  });

//Routes
authorsResource.initRouter(app);
booksResource.initRouter(app);
bookspopulateResource.initRouter(app);
categoriesResource.initRouter(app);
publishersResource.initRouter(app);
usersResource.initRouter(app);


app.listen(3002, function(){
  console.log('Bookstore OData.v4 on port 3002');
});
