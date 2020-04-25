const express = require('express'); 
const cors = require('cors'); 
const mongoose =require('mongoose');

require('dotenv').config(); 
const app= express(); 
const port =process.env.PORT ||4000; 

app.use(cors()); 
app.use((expresss.json())); 

const uri = process.env.

app.listen(port, ()=> {
    console.log(`Server is running on port: ${PORT}`);
})