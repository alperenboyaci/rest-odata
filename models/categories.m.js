var mongoose = require('mongoose');  

var CategoriesSchema = new mongoose.Schema({ 
    categoryName:{type:String},
    categoryInfo:{type:String},
    uploadUser:{type:String, default:'Admin'}				
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Categories', CategoriesSchema);


