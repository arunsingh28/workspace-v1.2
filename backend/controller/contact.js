const express = require('express');
const app = express.Router()

const contactDB = require('../model/contact')


// @route domain/fetch Data
// @method GET
app.get('/',(req,res)=>{
    res.set('Content-Type', 'html/plain')
    contactDB.find()
        .then(contact => res.json(contact))
})

// @route domain/query
// @method POST
app.post('/',async(req,res)=>{
    const { name,email,message } = req.body;
    console.log(name,email,message)
    let id = Math.random();
    const newQueary = contactDB({name,email,message,id})
    console.log(name,email,message)
    await newQueary.save()
    .then(()=>{
        res.status(200).send({message:'Queary Submitted.'})
    })
    .catch(err => console.log(err))  
})




module.exports = app