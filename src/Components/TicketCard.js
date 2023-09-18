import React, { Component } from 'react';

export default function TicketCard(ticketCard){


    return(

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
    );
}