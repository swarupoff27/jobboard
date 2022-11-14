import React from "react";
import './Sign.css';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Signup from "./Signup";

import { getDatabase, ref, child, get } from "firebase/database";




function Signin() {
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();


        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const dataobj = snapshot.val();
                console.log(dataobj);
                // console.log(snapshot.val());
                navigate("/user");

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


        const email = "";
        const password = "";


        const auth = getAuth();
        console.log(auth);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully signed in.");
                // const navigate = useNavigate();
                // navigate("/user");
                // <Navigate to="/user" />
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("errorCode:", errorCode)
                console.log("errorMessage:", errorMessage)

            });
        navigate("/user");

        // const { email, password } = this.state
    }


    // render() {
    // if (this.state.loggedIn) {
    //     return <Navigate to="/user" />
    // }


    return (
        <React.Fragment>
            <form className="form signin-form" action="">
                <h2 className="text-center font-bold text-3xl">SIGN IN</h2>
                <input id="email" type="text" name="email" placeholder="Email" />
                <input id="password" type="password" name="password" placeholder="Password" />
                <button className="btn btn-signin" onClick={submitForm}>Sign in</button>

                <Link to="/">Not Signed up? Sign up</Link>
            </form>
        </React.Fragment>
    )
    // }
}


export default Signin;

//******************************************************************* */
