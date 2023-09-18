import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./CSS/Tickets.css";

function Tickets() {
  const [ticketRecord, setTicketRecord] = useState([]);
  const [ticketCard, setTicketCard] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [displayInput, setDisplayInput] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);

  /*
Toggles the edit mode when the edit button is clicked on
*/
  const toggleEditMode = () => {
    setDisplayContent(!displayContent);
    setDisplayInput(!displayInput);
  };

  // Handles the input change when we enter edit mode
  const handleInputChange = (event) => {
    setNewDescription(event.target.value);
  };

  /*
Get ticket and display the ticket card when the user clicks on a row 
*/
  function getTicketOnClick(ticket) {
    setTicketCard(ticket);
    setNewDescription(ticket.description);
    console.log(ticket);
  }

  const saveInput = (newDescription) => {
    const updatedTicket = { ...ticketCard, description: newDescription };

    fetch("http://localhost:5000/api/ticketsUpdate/" + ticketCard._id, {
      method: "PATXH",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTicket),
    })
      .then(() => {
        console.log("new ticket added!");
      })
      .catch((error) => {
        window.alert(error);
        return;
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/ticketRecord")
      .then((res) => res.json())
      .then((result) => {
        setTicketRecord(result);
        setTicketCard(result[0]);
      })
      .catch((err) => {
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
              {ticketRecord.map((ticket) => (
                <tr
                  className="ticket-body"
                  key={ticket._id}
                  onClick={() => getTicketOnClick(ticket)}
                >
                  <td className="issue">{ticket.issue}</td>
                  <td className="priority-level">{ticket.priority}</td>
                  <td className="summary">{ticket.summary}</td>
                  <td className="assignee">{ticket.assignee}</td>
                  <td className="status">{ticket.status}</td>
                  <td className="created">{ticket.created} </td>
                  <td>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPenToSquare}
                      size="lg"
                      color="#FF9642"
                      onClick={toggleEditMode}
                    />
                    <FontAwesomeIcon
                      className="icon"
                      icon={faXmark}
                      size="lg"
                      color="#FF9642"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ticket-card">
          <div className="ticket-header">
            <h2>Ticket: {ticketCard.summary}</h2>
          </div>
          <div className="ticket-assignee">
            <h4>Assignee:{ticketCard.assignee}</h4>
            <div className="profiles"></div>
          </div>
          <div className="ticket-description">
            <h4>Description</h4>
            {displayContent && <p>{ticketCard.description} </p>}
            {displayInput && (
              <>
                <textarea
                  className="description"
                  id="description"
                  value={newDescription}
                  type="text"
                  placeholder="Issue Description"
                  rows="8"
                  cols="80"
                  onChange={handleInputChange}
                ></textarea>

                <>
                  <button className= "progress">In Progress</button>
                  <button className= "progress"           >Closed</button>
                </>
              </>
            )}
          </div>

          <div className="ticket-comments">
            <h4>Comments</h4>
            <div className="user-comments"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tickets;
