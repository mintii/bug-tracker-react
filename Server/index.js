const express = require('express');
const assert = require('assert');
const cors = require("cors");
const bodyParser =require('body-parser');
require("dotenv").config({ path: "./config.env" });
const app = express();
app.use(cors());
app.use(bodyParser.json());

const TicketsController = require("./controllers/tickets.controller");

const mongoose =require('mongoose');

const uri = "mongodb+srv://thiamath95:DQQo21x798p4EYCO@ticketlist.a1fivfx.mongodb.net/Tickets?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

app.post('/api/createTickets',[ 
    TicketsController.create
]);
app.get('/api/ticketRecord',[
    TicketsController.getAll
]);
app.get('/api/tickets/:ticketID',[
    TicketsController.getById

]);
app.patch('/api/ticketsUpdate/:ticketID',[
    TicketsController.patchById
]);
// app.delete('tickets/:ticketID',[
//     TicketsController.removeById
// ]);
app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT);
});
