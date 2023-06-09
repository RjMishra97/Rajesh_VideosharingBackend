const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

app.use(cors())

dotenv.config();
app.use(bodyParser.json())
app.use(express.json())
require("./db/conn.js")

app.use(require("./router/Upload.js"))
app.use(require("./router/Search.js"))

const Video = require("./model/Video.js")
app.use(require("./router/auth.js"))
const User=require("./model/users.js")


const PORT = 8080;
const middleware=(req,res,next)=>{
    console.log("i am midddleware")
    next()
}
app.listen(PORT, (err) => {

     if (err) console.log(err);
    console.log(`App listen on ${PORT}`)
})

