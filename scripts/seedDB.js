const mongoose = require("mongoose"); 
const db =require("../BillBoard/models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/billboard"
);

const billboardSeed =[

    {
        title: ""
    }
]