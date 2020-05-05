// //api routes for adding, removing, or updating a clients contract


  const db = require("../models");
//  const Customer = require("../models/customers");

 module.exports = function (app) {
    
  app.get("/api/customers", (req, res) => {
//       console.log("hi");
     db.Customer.findAll().then(function (dbCustomer) {
       res.json(dbCustomer);
     }).catch(err => {
        res.json(err);
        console.log("Got here");
     })
   });

//   //post a new buildboard contract to the client
   app.post("/api/customers", (req, res) => {
       console.log(req.body);
     db.Customer.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      business_name: req.body.business_name,
      bill_address: req.body.bill_address,
      phone: req.body.phone,
      number_signs: req.body.number_signs,
      signs_rented: req.body.signs_rented,
      contract_term: req.body.contract_term,
      monthly_rent: req.body.monthly_rent,
      delinquent_account: req.body.delinquent_account,
      past_due_payment: req.body.past_due_payment,
      
     })
       .then(function(dbCustomer) {
           res.json(dbCustomer);
       })
       .catch((err) => {
         if (err) console.log(err);
         console.log(db);
      });
   });
    }

  //Delete route

  // app.delete("/api/customer/:id", (req, res) => {
  //   db.Customer.destroy({
  //     where: {
  //       id: req.body.id,
  //     },
  //   }).then(function (dbCustomer) {
  //     res.json(dbCustomer);
  //   });
  // });

//   //Put route
//   app.put("/api/customer", (req, res) => {
//     db.Customer.update(
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
