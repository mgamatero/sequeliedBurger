var db = require ('../models')

 module.exports = function(app){
app.get('/api/burgers',function(req,res){
    db.burger.findAll({}).then(function(r){
        return res.json(r)
        // console.log(r)
    })
})

app.post('/api/burgers/:name', function(req,res){
    db.burger.create({
        name:req.params.name,
        eaten:"N"
    }).then(function(r) {
        // console.log(res.json(r))
        console.log(req.params.name + "added")
    })
})
}