const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const Details = require("./models/detail")


// ejs set
app.set("view engine", "ejs")
app.use(expressLayouts)

//  connect database
mongoose.connect("mongodb://localhost:27017/dynamicWebsiteDB").then( ()=>{ console.log("mongodb connected...")}).catch(err => {console.log(err)})

// static files
app.use(express.static(__dirname + "/../public"))

// use routes
app.use("", require("./routes/home"))

// app.listen 
const port = process.env.PORT || 3000
app.listen(port, console.log(`sever is started: ${port}`))