var mongoose = require('mongoose');  

var PublishersSchema = new mongoose.Schema({ 
    publisherCode:{type:String, unique:true, lowercase:true, trim:true},
    publisherName:{type:String},
    publisherCountry:{type:String, default:'Türkiye'},
    publisherTaxInfo:{taxoffice:{type:String},taxno:{type:String}},
    contactDetails:{phone:{type:String},email:{type:String},address:{type:String}},
    contacts:[{name:{type:String},role:{type:String},phone:{type:String},email:{type:String}}],
    uploadUser:{type:String, default:'Admin'}					
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Publishers', PublishersSchema);