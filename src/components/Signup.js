import React, { useState } from 'react'
import './Sign.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from ''; //path
import  app  from '../firebase'







let allusersdetails = [];
let id = 0;

function Signup() {
    const navigate = useNavigate();
    const auth = getAuth(app);


    const [iaman, setiaman] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    
    
    const signup = (e) => {
        // console.log("hi");
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user",user);
                alert("Successfully created an account.");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // alert(errorCode);
                // const errorMessage = error.message;
                // ..
            });



    //     const iaman = document.getElementById("iaman").value;
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;

        // let userdetails = {
        //     id: id++,
        //     iaman: iaman,
        //     name: name,
        //     email: email,
        //     password: password
        // };

        // if (iaman === "") {
        //     alert("Choose who you are.");
        // } else if (name === "") {
        //     alert("Enter you name.");
        // } else if (email === "") {
        //     alert("Enter you email.");
        // } else if (password === "") {
        //     alert("Enter you password.");
        // } else {
        //     allusersdetails.push(userdetails);
        //     localStorage.setItem("allusersdetails", JSON.stringify(allusersdetails));
        //     console.log(allusersdetails);
        //     alert("Signed up successfully!!!");
        //     navigate("/signin");
        // }

        navigate("/signin");


    }

    return (
        <div className="signup-wrapper">
            {/* <div className="illustration flex-1 flex items-center justify-center flex-col h-screen bg-blue">
                <h1 className="font-bold text-3xl absolute text-white top-10">JOB BOARD</h1>
                <img className="mt-24" src='https://svgshare.com/i/nKN.svg' title='illustration' width="70%" height="70%" />
            </div> */}
            <form className="form signup-form" action="">
                <h2 className="text-center font-bold text-3xl">SIGN UP</h2>
                <select id="iaman" name="iaman" onChange={(e) => setiaman(e.target.value)}>
                    <option hidden value="">I am an..</option>
                    <option>I am an Employee</option>
                    <option>I am an Employer</option>
                </select>
                <input id="name" name="name" type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                <input id="email" name="email" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                <input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                <button className="btn btn-signup" onClick={signup}>Sign up</button>

                <Link to="/signin">Already signed up? Sign in</Link>
            </form>

        </div>
    );
}

export default Signup;
