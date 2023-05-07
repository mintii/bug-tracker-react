import React, { useState, useEffect } from "react";
import "./CSS/Tickets.css";

function Tickets() {

  const [ticketRecord, setTicketRecord] = useState([]);
  const [ticketCard, setTicketCard] = useState("");
  
useEffect(()=>{

  fetch("http://localhost:5000/api/ticketRecord")
  .then(res=> res.json())
  .then((result)=>{

    
    setTicketRecord(result);
    setTicketCard(result.at(0));

  }
  )
  .catch((err)=>{
    console.log(err.message);
  });
}, []);



  
  return (
    <div className="ticket-wrapper">
      <div className="header">
        <h1> Tickets</h1>
      </div>
      <div className="ticket-content-wrapper">
        <div className="ticket-table">
          <table className="ticket-list">
            <thead>
              <tr>
                <th className="header-ticket">Issue</th>
                <th className="header-ticket">Priority Level</th>
                <th className="header-ticket">Summary</th>
                <th className="header-ticket">Assignee</th>
                <th className="header-ticket">Status</th>
                <th className="header-ticket">Created</th>
              </tr>
            </thead>
            <tbody>

              {ticketRecord.map(ticket=>(


                        <tr key={ticket._id}>
                        <td className="issue">{ticket.issue}</td>
                        <td className="priority-level">{ticket.priority}</td>
                        <td className="summary">{ticket.summary}</td>
                        <td className="assignee">{ticket.assignee}</td>
                        <td className="status">{ticket.status}</td>
                        <td className="created">{ticket.created}</td>
                        </tr>
              ))}

              
            </tbody>
          </table>
        </div>
        <div className="ticket-card">
          <div className="ticket-header"> 
          <h2>
          Ticket ID: {ticketCard.summary}
          </h2>
          </div>
          <div className="ticket-assignee">
            <h4>Assignee:{ticketCard.assignee}</h4>
            <div className="profiles">

            </div>
          </div>
          <div className="ticket-description">
            <p>
            {ticketCard.description}
            </p>
          </div>


          <div className="ticket-comments">
          <h4>Comments</h4>
            <div className="user-comments">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
          }
export default Tickets;
