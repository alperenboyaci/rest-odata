var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var multer = require('multer');
var randomstring = require("randomstring");


var Model = require("../models/uploads.m");

  // Upload settings
    var storage = multer.diskStorage({
      destination: function(req, file, cb)  {
      cb(null, './_uploads/');     
      },
      filename: function(req, file, cb) {
        cb(null, randomstring.generate()+getExtension(file))
      }
    });
  // Create and get file extention info for diskstorage
    function getExtension(file) {
      var res = '';
      if (file.mimetype === 'image/jpeg') res = '.jpg';
      if (file.mimetype === 'image/png') res = '.png';
      if (file.mimetype === 'application/pdf') res = '.pdf';
      return res;
    }
  // Filter File types
    var fileFilter = (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(null, false);
      }
    };
  // Upload size/limit (5MB)
    var upload = multer({
      storage: storage,
      limits: {
        fileSize: 1024 * 1024 * 5
      },
      fileFilter: fileFilter
    });


//UPLOAD
router.post("/", upload.single('uploadLink'), function (req, res) {
    var fileupload = new Model({
      uploadType:req.body.uploadType,
      name: req.body.name,
      uploadLink: 'http://www.mysitepath.com/'+req.file.path.replace(/\\/g,'/'), 
      uploadDetails:{
        size:req.file.size,
        mime:req.file.mimetype, 
        path:req.file.path.replace(/\\/g,'/'),         
        filename:req.file.filename, 
        encoding:req.file.encoding,
        orijinalname:req.file.originalname
       // uploadIp:req.body.requestIp,
       // uploadOs:req.body.uploadOs,
       // uploadScreen:req.body.uploadScreen,        
        }
    });

    Model.create(fileupload,
        function (err, data) {
            if (err) return res.status(500).send("There was a problem adding book to the database.");
            res.status(200).send(fileupload);
    });



  });


module.exports = router;
