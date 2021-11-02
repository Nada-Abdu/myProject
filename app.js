const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const log = require("console");
var cookieParser = require('cookie-parser');
var session = require('express-session');
const mongoose = require('mongoose');
const schema = require('./models/project_schema');

//files
app.use(express.static(path.join(__dirname, "./public/")));

//DB connection
const projectDB = "mongodb+srv://my_projects:mp11223344@cluster0.xevc5.mongodb.net/myProject?retryWrites=true&w=majority";
mongoose.connect(projectDB , {useNewUrlParser: true , useUnifiedTopology: true}).then((result) => {
  app.listen(3000, function () {
    console.log("App listening on port 3000!");
  }); 

  app.get("/", function (req, res) {
    //clear cooki
    return res.sendFile(path.join(__dirname + "/public/login.html"));
  });

}).catch((err) => {
  console.log("There's an error in connection with BD");
});

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//cookieParser
app.use(cookieParser());

//session
app.use(session({
  secret: '8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb',
  resave: true,
  saveUninitialized: true
}));




