var mongoose = require('mongoose');  

var UploadsSchema = new mongoose.Schema({ 
    uploadType:{type:String, enum:['Cover','Summary']},
    name: {type:String},
    uploadLink: {type:String},
    uploadDetails: {
        size:{type: Number}, 
        mime:{type:String}, 
        path:{type:String}, 
        filename:{type:String}, 
        encoding:{type:String},
        orijinalname:{type:String},
        //Extra Client Data
        uploadIp:{type:String},
        uploadOs:{type:String},
        uploadScreen:{type:String}
    },
    uploadUser:{type:String, default:'Admin'}					
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Uploads', UploadsSchema);


