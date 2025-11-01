//import dotenv express cors
// Loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routing/router')
require('./db/connection')

//create server
const bookstoreServer = express()
//enable cors protocol in server app
bookstoreServer.use(cors())
bookstoreServer.use(express.json()) // parse json 
bookstoreServer.use(router)
bookstoreServer.use('/uploads',express.static('./uploads'))
bookstoreServer.use('/pdf',express.static('./pdf'))
//create port
const PORT = 3000 

//RUN SERVER PORT
bookstoreServer.listen(PORT,()=>{
    console.log(`BookStore Server started at PORT: ${PORT}, and waiting for client request!!!`);
})

//resolving http request
bookstoreServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue;">BookStore Server started...and waiting for client requests!!! </h1>`)
})
