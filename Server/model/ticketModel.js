const mongoose = require("mongoose");

function formattedDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

const ticketSchema = new mongoose.Schema({

    issue: {type: String, default:"Bug"},
    priority: {type: String, default:"Low"},
    summary: String,
    assignee: String,
    status: {type: String, default: "open"},
    created :{type: String, default:formattedDate(Date.now())},
    description: String
});

module.exports = mongoose.model('Tickets', ticketSchema);