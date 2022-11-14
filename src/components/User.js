import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import Postajob from './Postajob';
import Joblisting from './Joblisting';
import './User.css';

class User extends Component {

    render() {
        // if (this.state.loggedIn === false) {
        //     return <Navigate to="/signin" />
        // }

        return(
            <div>User page</div>
        )

        // for (let i = 0; i < allusersdetails.length; i++) {
        //     if (allusersdetails[i].name === loggedinuser[0] && allusersdetails[i].iaman === "I am an Employer") {
        //         console.log(allusersdetails[i].id)

        //         return (
        //             <div className="user">
        //                 <div className="user-nav bg-blue px-10">
        //                     <p>Hello {loggedinuser[0]}</p>
        //                     <div className="wrapper">
        //                         <button><Link to="/postajob">Post a job</Link></button>
        //                         <button><Link to="/joblisting">View Jobs</Link></button>
        //                         <button><Link to="/signout">Sign out</Link></button>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     } else if (allusersdetails[i].name === loggedinuser[0] && allusersdetails[i].iaman === "I am an Employee") {
        //         return (
        //             <div className="user">
        //                 <div className="user-nav bg-blue px-10">
        //                     <p>Hello {loggedinuser[0]}</p>
        //                     <div className="wrapper">
        //                         <button><Link to="/joblisting">View Jobs</Link></button>
        //                         <button><Link to="/signout">Sign out</Link></button>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     }
        // }

    }
}



export default User