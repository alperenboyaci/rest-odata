var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var checkAuth = require('./auth/check'); 


// Models
    var Model = require('../models/books.m');    
    var Authors = require('../models/authors.m');  
    var Categories = require('../models/categories.m');  
    var Publishers = require('../models/publishers.m');  

 // Include/Exclude result fields   
    var excfields = '-updatedAt  -createdAt -__v -uploadUser -onSale';
    var slcfields = '';


// GET (all)
    router.get('/',checkAuth, function (req, res) {
        Model.find()
        .where('onSale').equals(true)
        .populate(
            {path:'rel_Publishers',
             model:Publishers, 
             select:'publisherCode publisherName publisherCountry -_id'
            })
        .populate(
            {path:'rel_Authors',
             model:Authors, 
             select:'authorCode authorFName authorLName -_id'
            })   
        .populate(
            {path:'rel_Categories',
             model:Authors, 
             select:'categoryName -_id'
            })                     
        .select(excfields)              //.select(slcfields) 
        .exec(function (err, data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            res.status(200).json({total:{"count":data.length}, list:data});        
            })
    });

	
// GET (single)
    router.get('/:id', checkAuth, function (req, res) {
        Model.findById( req.params.id)
        .populate(
            {path:'rel_Publishers',
             model:Publishers, 
             select:'publisherCode publisherName publisherCountry -_id'
            })
        .populate(
            {path:'rel_Authors',
             model:Authors, 
             select:'authorCode authorFName authorLName -_id'
            })   
        .populate(
            {path:'rel_Categories',
             model:Authors, 
             select:'categoryName -_id'
            })         
        .select(excfields)    
        .exec(function (err, data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            if (!data) return res.status(404).send("No data found.");
            res.status(200).send(data);
        });
    });



module.exports = router;

