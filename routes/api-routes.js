//api routes for adding, removing, or updating a clients contract

const db = require("../models");

module.exports = function(app) {

    app.get("/api/client", (req, res) => {
        db.Client.findAll({}).then(function(dbClient) {
            res.json(dbClient);

        
    });
});

//post a new buildboard contract to the client
app.post("/api/client", (req, res) => {
    console.log(req.body);

    db.Client.create({
        text: req.body.text,
        complete: req.body.complete
    }).then(function(dbClient) {
        res.json(dbClient);
    });

    });

    //Delete route

    app.delete("/api/client/:id", (req, res) => {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbClient) {
            res.json(dbClient);
        })

    });


//Put route
app.put("/api/todos", (req, res) => {
    db.Client.update({
        text: req.body.complete
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbClient) {
        res.json(dbClient);
    });

});

};

