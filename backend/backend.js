const express = require('express');
const assert = require('assert');
const cors = require("cors");
const bodyParser =require('body-parser');
require("dotenv").config({ path: "./config.env" });
const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

const TicketsController = require("./controllers/tickets.controller");

const mongoose =require('mongoose');

const uri = "mongodb+srv://thiamath95:DQQo21x798p4EYCO@ticketlist.a1fivfx.mongodb.net/Tickets?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

// const fruitSchema = new mongoose.Schema({

//     name: String,
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit= new Fruit({
//     name:"Grape",
//     rating:7,
//     review:"Pretty solid as a fruit."
// });

// fruit.save();

// console.log(Fruit.find());

app.post('/api/createTickets',[ 
    TicketsController.create
]);
app.get('/api/ticketRecord',[
    TicketsController.getAll
]);
app.get('/tickets/:ticketID',[
    TicketsController.getById
]);
app.path('tickets/:ticketID',[
    TicketsController.patchById
]);
// app.delete('tickets/:ticketID',[
//     TicketsController.removeById
// ]);
app.listen(process.env.PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT);
});
