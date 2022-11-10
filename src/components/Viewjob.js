import React from "react";
import './Viewjob.css';




function Viewjob() {
    const x = JSON.parse(localStorage.getItem("viewedjob"));
    // console.log(x);
    // let viewjob = [];
    // viewjob.push(x);


    return (
        <div className="viewjob-wrapper">
            <div className="viewjob-card">
                <p><b>Company:</b> {x.company}</p>
                <p><b>Role:</b> {x.role}</p>
                <p><b>Description:</b> {x.description}</p>
                <p><b>Type:</b> {x.type}</p>
                <p><b>Salary:</b> {x.salary}</p>
                <p><b>Location:</b> {x.location}</p>
                <button>Apply</button>
            </div>
        </div>
    )
    // const jobs = x.map((job,index) => {
    //     return (
    //         <div>{index}</div>
    //     )
    // })

    // return <React.Fragment>{jobs}</React.Fragment>;

}

export default Viewjob;
