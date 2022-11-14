import React, { useState } from 'react'
import './Sign.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase'

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import { getDatabase, ref, set } from "firebase/database";



function Signup() {
    const navigate = useNavigate();
    const auth = getAuth(app);

    const [iaman, setiaman] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const signupForm = (e) => {
        // console.log("hi");
        e.preventDefault();


        //Firestore database
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log("User Details", user);
        //         alert("Successfully created an account.");
        //         // navigate("/signin");
        //         // <Navigate to="/signin" />

        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;

        //         // alert(errorCode);
        //         // const errorMessage = error.message;
        //         // ..
        //     })


        const db = getFirestore(app);
        try {
            addDoc(collection(db, "users"), {
                iaman: iaman,
                name: name,
                email: email,
                password: password,
            });
            // console.log("Document written with ID: ", docRef.id);
            console.log("User details added to Firestore.");
            

        } catch (e) {
            console.error("Error adding document: ", e);
        }





        //realtime database
        function writeUserData() {
            const db = getDatabase();
            // console.log(db);
            set(ref(db, 'users/' + name), {
                iaman: iaman,
                name: name,
                email: email,
                password: password,
            });
            navigate("/signin");
        }

        writeUserData();







        // const iaman = document.getElementById("iaman").value;
        // const name = document.getElementById("name").value;
        // const email = document.getElementById("email").value;
        // const password = document.getElementById("password").value;
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
                <button className="btn btn-signup" onClick={signupForm}>Sign up</button>
                <Link to="/signin">Already signed up? Sign in</Link>
            </form>





        </div>
    );

}

export default Signup;
