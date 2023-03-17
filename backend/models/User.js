const mongoose = require('mongoose')

const { Schema } = mongoose;    //destructureing in js

const UserScheme = new  Schema({
    name:{
        type: String,
        required: true      //forvalidation that data should be entered
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    data:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model('user',UserScheme)    //when we will use this it create collection in database