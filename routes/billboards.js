// //api routes for adding, removing, or updating a clients contract


const db = require("../models");
//  const Customer = require("../models/customers");

 module.exports = function (app) {
    
  app.get("/api/billboards", (req, res) => {
//       console.log("hi");
     db.Billboard.findAll({}).then(function (dbBillBoard) {
       res.json(dbBillBoard);
     }).catch(err => {
        res.json(err);
     })
   });

//   //post a new buildboard contract to the client
   app.post("/api/billboards", (req, res) => {
       console.log(req.body);
     db.Billboard.create({
      lat: req.body.lat,
      lng: req.body.lng,
      location: req.body.location,
      size: req.body.size,
      type: req.body.type,
      avalible: req.body.avalible,
      sides: req.body.sides,
      sign_no: req.body.sign_no,
      
    })
       .then(function(dbBillBoard) {
           res.json(dbBillBoard);
       })
       .catch((err) => {
         if (err) console.log(err);
      });
   });
    }

  //Delete route

//   app.delete("/api/billboard/:id", (req, res) => {
//     db.Billboard.destroy({
//       where: {
//         id: req.body.id,
//       },
//     }).then(function (dbBillboard) {
//       res.json(dbBillboard);
//     });
//   });

//   //Put route
//   app.put("/api/billboards", (req, res) => {
//     db.Billboards.update(
//       {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         business_name: req.body.business_name,
//         bill_address: req.body.bill_address,
//         phone: req.body.phone,
//         number_signs: req.body.number_signs,
//         signs_rented: req.body.signs_rented,
//         contract_term: req.body.contract_term,
//         monthly_rent: req.body.monthly_rent,
//         delinquent_account: req.body.delinquent_account,
//         past_due_payment: req.body.past_due_payment,
//       },
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     )
//       .then((response) => res.json(response))
//       .catch((err) => {
//         res.status(501).json(err);
//       });
//   });
//  };