
//api routes for adding, removing, or updating a clients contract

const db = require("../models");

module.exports = function(app) {

    app.get("/api/customer", (req, res) => {
        db.Customer.findAll({}).then(function(dbCustomer) {
            res.json(dbCustomer);

        
    });
});

//post a new buildboard contract to the client
app.post("/api/customer", (req, res) => {
    console.log(req.body);

    db.Customer.create({
        text: req.body.text,
        complete: req.body.complete
    }).then(function(dbCustomer) {
        res.json(dbCustomer);
    });

    });

    //Delete route

    app.delete("/api/customer/:id", (req, res) => {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        })

    });


//Put route
app.put("/api/customer", (req, res) => {
    db.Customer.update({
        text: req.body.complete
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer);
    });

});

};


