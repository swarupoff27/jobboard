import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import './User.css';


function Dashboard() {
    return (
        <div className="user">
            <div className="user-nav bg-blue px-10">
                <p>Hello</p>
                <div className="wrapper">
                    <button><Link to="/postajob">Post a job</Link></button>
                    <button><Link to="/joblisting">View Jobs</Link></button>
                    <button><Link to="/signout">Sign out</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
