const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')

//DatabaseConnection
mongoose.connect('mongodb://test:test@ds121309.mlab.com:21309/bookstore');

//App
const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

//Models
const authors = require('./models/authors.m')
const books = require('./models/books.m')
const categories = require('./models/categories.m')
const publishers = require('./models/publishers.m')
const users = require('./models/users.m')

//Routers
restify.serve(router, authors)
restify.serve(router, books)
restify.serve(router, categories)
restify.serve(router, publishers)
restify.serve(router, users)

//Start Service
app.listen(3000, () => {
  console.log('Bookstore RESTfull on port 3000')
})
