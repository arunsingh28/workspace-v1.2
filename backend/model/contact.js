const mongoose = require('mongoose')


const contact = mongoose.Schema({
    name : {type: String,required: true,message:'Name is not filed'},
    email : {type: String,required: true,message:'email not filed'},
    message : {type: String,required: true,message:'message not filed'}
})

module.exports = mongoose.model('contactForm',contact)

