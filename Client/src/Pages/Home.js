import React from "react";
import "./CSS/Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="header">
        <h1> Dashboard</h1>
      </div>

      <div className="dashboard-wrapper">
        <div className="l-box">
            <div className="box-header">
                Ticket Activity
            </div>
            </div>
        <div className="box">
            <div className="box-header">
                Tickets By Priority
            </div>

            <div className="activity_container">
                {/* The activity feed for the created tickets */}
            </div>
            </div>
        <div className="box">
            <div className="box-header">
                Tickets By Status

            </div>
            </div>
        <div className="box">
            <div className="box-header">
                Open Tickets

                </div>
                </div>
        <div className="box">
            <div className="box-header">

                Today's Tickets

                </div>
                </div>
        <div className="box">
            <div className="box-header">
                Tickets Created Today
                </div>
                </div>
      </div>
    </div>
  );
}

export default Home;
