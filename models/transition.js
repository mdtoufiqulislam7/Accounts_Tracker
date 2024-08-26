const mongoose = require('mongoose')

const income = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim: true,
        maxLength: 15
    },
    amount:{
        type:Number,
        require:true,
        trim: true,
        maxLength: 20
    },
    type:{
        type:String,
        default: 'income'
    },
    date:{
        type:Date,
        require:true,
        trim: true,
    
    },
  
    
    category:{
        type:String,
        require:true,
        trim: true,
        
    },
   
    description:{
        type:String,
        require:true,
        trim: true,
        maxLength: 5000
    },
},{timestamps:true})
const Income = mongoose.model('Income', income);


module.exports=  Income