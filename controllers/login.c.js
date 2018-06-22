var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Models
    var Model = require('../models/users.m');    


// Sign-In
router.put('/', function (req, res) {
    Model.find({userEMail: req.body.userEMail, userPassword: req.body.userPassword}, function (err, data) {
        if (err) return res.status(500).send("There was a problem finding the data.");
        if (data.length<1) return res.status(409).send("User not found.")
        else 
        {
          const token = jwt.sign(
            {
              userEMail: data.userEMail,
              id: data._id
            },
            'aLpErEn.2018!',
            {
              expiresIn: "1d"
            }
          );
          return res.status(200).send({
            message: "Auth successful",
            token: token
          });
        }
    });
  });


module.exports = router;

