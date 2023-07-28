const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const userSchema=new Schema(
    {
    name:{
        type:String
    },
    height:{
        type:String,
    },
    weight:{
        type:String
    },
    role: {
        type: String
    }, 
    age:{
        type:String
    },
    lmp:{
        type:Date
    },
    edd:{
        type:Date
    },
    onboardingCompleted:{
        type:Boolean,
        required:false
    },
    isVerified:{
        type:Boolean,
        required:false
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: String
    },      
}, { timestamps: true })

module.exports=mongoose.model("User",userSchema);



