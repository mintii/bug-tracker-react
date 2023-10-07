import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css" ; 
export default function Navbar() {

  return (
    < >
      <nav className="sidebar">
        <div className="logo-content">
          <i className="logo-icon fa fa-bug"></i>
          <div className="logo-name title">Hexbug</div>
          <i className="menu fa fa-bars" aria-hidden="true"></i>
        </div>
        <ul className="nav-li">
          <li>
            <NavLink className=" option " to="/">
                <i className="icon fa fa-home" aria-hidden="true"></i>
                <span className="title">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className=" option " to="/tickets">
                <i className="icon fa fa-ticket"  aria-hidden="true"></i>
                <span className="title">Ticket</span>
            </NavLink>
          </li>
          <li>
            <NavLink className=" option " to="/createTickets">
              
                <i className="icon fa fa-plus" aria-hidden="true"></i>
                <span className="title">Create</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink className=" option " to="/analytics">
             
                <i className="icon fa fa-bar-chart" aria-hidden="true"></i>
                <span className="title">Analytics</span>
             
            </NavLink>
          </li>
          <li>
            <NavLink className=" option " to="/profile">
             
                <i className="icon fa fa-user" aria-hidden="true"></i>
                <span className="title">Profile</span>
          
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
