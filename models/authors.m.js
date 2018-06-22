var mongoose = require('mongoose');  

var AuthorsSchema = new mongoose.Schema({ 
    authorCode:{type:String, unique:true, lowercase:true, trim:true},
    //authorPhoto:{data: Buffer, contentType: String},        //binary image upload
    authorName:{type:String},
    authorLName:{type:String},    
    nationality:{type:String, default:'TR'},
    dateofBirth:{type:String},
    contactDetails:{phone:{type:String},email:{type:String},address:{type:String}},
    uploadUser:{type:String, default:'Admin'}					
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Authors', AuthorsSchema);


