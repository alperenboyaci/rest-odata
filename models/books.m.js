var mongoose = require('mongoose');  

var BooksSchema = new mongoose.Schema({ 
    rel_Publishers:{ type: mongoose.Schema.Types.ObjectId, ref: 'Publishers'},
    rel_Authors:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Authors'}],
    rel_Categories:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories'}],
    isbn:{type:String, unique:true},
    title:{type:String},
    description:{type:String},
    language:{type:String, default:'Türkçe'},
    publishedDate:{type:Date},
    volumeNo:{type:String, default:"1. Baskı"},
    price:{type:Number},
    totalpages:{type:Number},
    cover:{type: mongoose.Schema.Types.ObjectId, ref: 'Uploads'},
    summary:{type: mongoose.Schema.Types.ObjectId, ref: 'Uploads'},                                
    tags:[],
	onSale:{type:Boolean, default:true},	        //on Sale
    uploadUser:{type:String, default:'Admin'}					
},
    //for createdAt and updatedAt fields
    {timestamps:true},
);

module.exports = mongoose.model('Books', BooksSchema);


