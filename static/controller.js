const Task = require("./models");

module.exports = {
    index: function(req, res){
        console.log('inside controller:')
        Task.find({})
        .then(results =>{
            res.json(results);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    one: function(req, res){
        var id = req.params.id;
        Task.findOne({_id:id})
            .then(result => res.json(result))
            .catch(err => console.log(err));
    },
    create: function(req, res){
        Task.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
        // var nm = req.body.name;
        // var ds = req.body.description;
        // var cm = req.body.completed;
        // var newobj = new Task({ name: nm});
        // console.log('welcome');
        // res.json({message: newobj + ' created'});
    },
    update: function(req, res){
        var id = req.params.id;
        var newobj = new Task (req.body);
        newobj.save(function(err) {
            if (err){
                console.log(err);
            } else {
                console.log('ok');
            }
        })
        res.json({message: id + ' updated'});
    },
    destroy: function(req,res){
        var x=req.params.x;
        Task.remove({x})
            .then(result => res.json(result))
            .catch(err => res.json(err));
        res.json({message: 'destroyed'});
    }
}