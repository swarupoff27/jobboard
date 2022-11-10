import React from "react";
import './Joblisting.css';
import { Link } from "react-router-dom";
import User from "./User"




let alljobs = [];

function Joblisting() {
    const x = JSON.parse(localStorage.getItem("companydetails"));

    if (x != null) {
        alljobs.push(x);
        const jobs = x.map((job, index) => {
            return (
                <div className="items my-5">
                    <div className="wrapper flex flex-col">
                        <p id="" className=""><span>Company: </span>{job.company}</p>
                        <p id="" className=""><span>Role: </span>{job.role}</p>
                    </div>
                    {/* <div className="wrapper">
                    </div> */}

                    <div className="btn-wrapper">
                        <button className="viewjob" id={index} onClick={() => {

                            const id = document.getElementsByClassName('viewjob')[index].id;
                            // console.log(id);
                            const viewjob = JSON.parse(localStorage.getItem("companydetails"))[index];
                            localStorage.setItem("viewedjob", JSON.stringify(viewjob));
                            // console.log(viewjob);

                        }}><Link to="/viewjob">View Job</Link></button>
                        <button >Apply</button>
                    </div>
                </div>
            );
        })
        return <React.Fragment>
            <div className="job-wrapper">
                {jobs}
            </div>
        </React.Fragment>
    } else {
        return (
            <div className="nojob-wrapper">
                <p id="" className="">NO JOBS AVAILABLE</p>
            </div>
        )
    }



}

export default Joblisting;
