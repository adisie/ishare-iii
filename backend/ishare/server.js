require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// setings
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('LISTENIG')
        })
    })
    .catch(err=>{
        console.log(err)
        process.exit(-1)
    })

// routes
app.use('/api/user',require('./routes/userRoutes'))