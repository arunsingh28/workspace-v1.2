const express = require('express')
const bcrypt = require('bcryptjs');
const user = express.Router()

const User_ = require('../model/user')
const Contact_ = require('../model/contact')

// User API
user.post('/signup',(req,res)=>{
    // destructring of data
    const {firstName,lastName,email,password} = req.body;
    const newUser = new User_({firstName,lastName,email,password})
    // checking email is present
    User_.findOne({email},(err,user)=>{
        if(user){
            return res.status().send({message: 'Email is already present.'})
        }
        // all field must be filled
        if(firstName == '' || lastName == '' || password == '' || email == ''){
            return res.status(200).send({message: 'Please Fill all Details'})
        }
        // password length must be greater then 8 char
        if(password.length <= 8){
            return res.status(200).send({message: 'Minimum length of password is 8'})
        }
        else{
            // encryption/salting of password
            bcrypt.genSalt(10,(err,salt)=>{
                // hasing
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if (err) throw err
                    newUser.password = hash
                    // save to db
                    newUser.save()
                    return res.status(200).send({message: 'Account is created now you can login.'})
                })
            })
        }
    })
})


// contact API
user.post('/contact',(req,res)=>{
    const {name,email,message} = req.body;
    const newQuery = new Contact_({name,email,message})
    if(name == '' || email == '' || message == ''){
       return res.status(200).send({message: 'Please fill all detail'})
    }else{
        newQuery.save()
        return res.status(200).send({message: 'Query submited'})
    }
})


// login API
user.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(!username){
        return res.send({message: "Gandu Email to daal."})
    }
    if(!password){
        return res.send({message: "maderchod password tera baap dalega."})
    }
    return res.send({message: "Password Galat hai Chutiye. Regard from Arun"})
})


module.exports = user;