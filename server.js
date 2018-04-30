//Dependencies
var express = require('express')
var db = require("./models")
var app = express()
var PORT = process.env.PORT || 8080

//Routes
require('./routes/routes.js')(app)

//Sync
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on port " + PORT)
    })
})