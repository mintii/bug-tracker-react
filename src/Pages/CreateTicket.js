import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./CSS/CreateTicket.css";


function CreateTicket() {

  const [form, setForm] = useState({
    issue: "Bug",
    priority: "Low",
    summary: "",
    assignee: "",
    description: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  const newTicket = { ...form };
  function handle(e){
    newTicket[e.target.id]=e.target.value;
    setForm(newTicket);
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/createTickets", {
      method: 'POST',
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(() => {
        console.log("new ticket added!");
      })
      .catch((error) => {
        window.alert(error);
        return;
      });

  
    navigate("/");
  }
  return (
    <div className="home-wrapper">
      <div className="header">
        <h1> Create Tickets</h1>
      </div>
      <div className="create-ticket-wrapper">
        <form className="ticket-form" onSubmit={onSubmit} method="POST">
          <div className="input-group">
            <label>Issue</label>
            <select 
            id ="issue"
            value={form.issue}
            onChange={handle}>
              <option
                >
                Bug
              </option>
              <option>
                Task
              </option>
            </select>
          </div>

          <div className="input-group">
            <label>Summary</label>
            <input
              type="text"
              id ="summary"
              value={form.summary}
              placeholder="Issue Summary"
              onChange={handle}
            />
          </div>
          <div className="input-group">
            <label >Priority Level</label>
            <select  id="priority" value={form.priority} onChange={handle}>
              <option >Low</option>
              <option >Medium</option>
              <option >High</option>
            </select>
          </div>

          <div className="input-group">
            <label >Assignee</label>
            <select
              id="assignee"
              value = {form.assignee}
              onChange={handle}
            >
              <option value="Person 1">Person 1</option>
              <option value="Person 2">Person 2</option>
              <option value="Person 3">Person 3</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="description"
              id="description"
              value={form.description}
              type="text"
              placeholder="Issue Description"
              onChange={handle}
              rows="8"
              cols="80"
            ></textarea>
          </div>
          <div className="footer">
            <button className="form_submit" type="submit">
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTicket;
