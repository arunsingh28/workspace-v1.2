const express = require('express');
const morgan = require('morgan')
const helmet  = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT  = process.env.PORT || 5001

// init express
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

// body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Db connection
const URI = 'mongodb+srv://arun:1234@cluster0.t3qon.mongodb.net/workspace?retryWrites=true&w=majority'
mongoose.connect(URI,{useUnifiedTopology:true, useNewUrlParser: true})
.then(()=>{console.log('Database Connected')})
.catch(err => console.log(err))


// routers
app.use('/',require('./controller/contact'))
app.use('/user',require('./controller/user'))


// listing port
app.listen(PORT,()=>{
    console.log(`Server runing on PORT:${PORT}`)
})

