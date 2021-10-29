const mongoose = require("mongoose");
const validator = require("validator");


const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 2
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email Already exists"],
        validate(val){
            if (!validator.isEmail(val)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone : {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999
    },
    address: {
        type: String,
        required: true
    }
})




const studentModel = new mongoose.model("student", studentSchema);

 

module.exports = studentModel;