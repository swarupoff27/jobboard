import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import Postajob from './Postajob';
import Joblisting from './Joblisting';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem('token')

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }



    render() {
        if (this.state.loggedIn === false) {
            return <Navigate to="/signin" />
        }


        const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));

        const allusersdetails = JSON.parse(localStorage.getItem("allusersdetails"));

        for (let i = 0; i < allusersdetails.length; i++) {
            // console.log(allusersdetails[i].name, loggedinuser[0])
            if (allusersdetails[i].name === loggedinuser[0] && allusersdetails[i].iaman === "I am an Employer") {
                console.log(allusersdetails[i].id)

                return (
                    <div className="user">
                        <div className="user-nav bg-blue px-10">
                            <p>Hello {loggedinuser[0]}</p>
                            <div className="wrapper">
                                <button><Link to="/postajob">Post a job</Link></button>
                                <button><Link to="/joblisting">View Jobs</Link></button>
                                <button><Link to="/signout">Sign out</Link></button>
                            </div>
                        </div>
                    </div>
                )
            } else if (allusersdetails[i].name === loggedinuser[0] && allusersdetails[i].iaman === "I am an Employee") {
                return (
                    <div className="user">
                        <div className="user-nav bg-blue px-10">
                            <p>Hello {loggedinuser[0]}</p>
                            <div className="wrapper">
                                <button><Link to="/joblisting">View Jobs</Link></button>
                                <button><Link to="/signout">Sign out</Link></button>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    }
}



export default User