var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


// Models
    var Model = require('../models/books.m');    

 // Include/Exclude result fields   
    var excfields = '-updatedAt  -createdAt -__v -uploadUser -onSale';
    var slcfields = '';


// GET (all)
    router.get('/', function (req, res) {
        Model.find()
        .where('onSale').equals(true)
        .select(excfields)              //.select(slcfields) 
        .exec(function (err, data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            res.status(200).json({total:{"count":data.length}, list:data});        
            })
    });

	
// GET (single)
    router.get('/:id', function (req, res) {
        Model.findById( req.params.id)
        .select(excfields)    
        .exec(function (err, data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            if (!data) return res.status(404).send("No data found.");
            res.status(200).send(data);
        });
    });

// POST
    router.post('/', function (req, res) {
        Model.find({_id:req.body.id}, function (err, data) {
            if (err) return res.status(500).send("There was a problem finding the data.");
            if (data.length>=1)
                {
                 return res.status(409).send("Book created before.");
                } 
                else
                { 
                    var pack = new Model();
                    var myvalues = req.body;
                    for (var field in myvalues){
                        pack[field] = myvalues[field];				
                    }
                
                    Model.create(pack,
                        function (err, data) {
                            if (err) return res.status(500).send("There was a problem adding book to the database.");
                            res.status(200).send(pack);
                    });
                }
        });
    });


// UPDATE (Put & Patch)
    router.put('/:id', function (req, res) {
        Model.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, data) {
            if (err) return res.status(500).send("There was a problem updating the data.");
            res.status(200).send(data);
        });
    });


// DELETE
    router.delete('/:id', function (req, res) {
        Model.findByIdAndRemove(req.params.id, function (err, data) {
            if (err) return res.status(500).send("There was a problem deleting the data.");
            res.status(200).send("Book : "+ req.params.id +" was deleted.");
        });
    });

module.exports = router;

