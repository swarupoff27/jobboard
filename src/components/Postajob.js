import React from 'react'
import './Postajob.css';
import { Link } from "react-router-dom";

import User from './User';


let alljobs = [];
let id = 0;

function Postajob() {


    const test = (e) => {
        e.preventDefault();
        const companyname = document.getElementById('companyname').value;
        const jobrole = document.getElementById('jobrole').value;
        const description = document.getElementById('description').value;
        const jobtype = document.getElementById('jobtype').value;
        const jobsalary = document.getElementById('jobsalary').value
        const joblocation = document.getElementById('joblocation').value

        let companydetails = {
            id: id++,
            company: companyname,
            role: jobrole,
            description: description,
            type: jobtype,
            salary: jobsalary,
            location: joblocation
        };

        alljobs.push(companydetails);
        localStorage.setItem("companydetails", JSON.stringify(alljobs));
        console.log(alljobs);

    }

    return (

        <React.Fragment>
        <form className="postajobform" action="">
            <h2 className="text-center blue font-bold text-3xl">POST A JOB</h2>
            <input id="companyname" type="text" placeholder="Company Name" />
            <input id="jobrole" type="text" placeholder="Job Role" />
            <textarea id="description" type="text" placeholder="Description" />
            <select id="jobtype" name="">
                <option defaultValue>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Contractual</option>
                <option>Temporary</option>

            </select>
            <input id="jobsalary" type="text" placeholder="Salary" />
            <input id="joblocation" type="text" placeholder="Location" />
            <button className="btn btn-signup" onClick={test}>
                <Link to='/joblisting'>ADD JOB</Link>
            </button>
        </form>
        </React.Fragment>

    )
}

export default Postajob;


