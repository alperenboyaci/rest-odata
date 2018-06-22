var mongoose = require('mongoose');  

var UsersSchema = new mongoose.Schema({ 
    userEMail:{
                type:String, 
                unique:true, 
                required:true,
                match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            },
    userPassword:{type:String, required:true},           //MD5 from Frontend
    userName:{type:String},
    gender: {type:String, enum:['Male','Female','undefined']},    
    nationality:{type:String, default:'TR'},
    dateofBirth:{type:String},
    activationCode:{type:String},
    memberships:[],            //for Authorization  
    isActive:{type:Boolean, default:false},
    uploadUser:{type:String, default:'Admin'}					
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Users', UsersSchema);


