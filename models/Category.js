const mongoose =require("mongoose");
const Schema =  mongoose.Schema;

//Schema defintion
const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    }
},{ timestamps: true });
module.exports = mongoose.model('category',categorySchema);