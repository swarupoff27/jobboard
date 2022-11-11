import React, { Component, useState ,useEffect } from "react";
import './Sign.css';
import { Link, Navigate } from "react-router-dom";



class Signin extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem('token')

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            email: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        const { email, password } = this.state

        const x = JSON.parse(localStorage.getItem("allusersdetails"));
        console.log(x);

        if (email === "") {
            alert('Enter your email.');
        } else if (password === "") {
            alert('Enter your password.');
        } else if (x != null) {
            for (let i = 0; i < x.length; i++) {
                let abc = (email === x[i].email && password === x[i].password)
                if (abc == true) {
                    console.log(abc);

                    const data = x[i].name;
                    console.log(data);

                    const loggedinuser = [];
                    loggedinuser.push(data);
                    localStorage.setItem("loggedinuser", JSON.stringify(loggedinuser));
                    // const hide_illus = document.querySelector('.illustration');
                    // hide_illus.classList.add('hide-illus');
                    alert('Signed in succesfully!!!');



                    function generate_token(length) {
                        //edit the token allowed characters
                        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
                        var b = [];
                        for (var i = 0; i < length; i++) {
                            var j = (Math.random() * (a.length - 1)).toFixed(0);
                            b[i] = a[j];
                        }
                        return b.join("");

                    }


                    // generate_token(100);

                    localStorage.setItem("token", generate_token(30))
                    this.setState({

                        loggedIn: true
                    })

                }
            }
        } else {
            alert('User not found! You need to Sign up first!')
        }

    }


    render() {
        if (this.state.loggedIn) {
            return <Navigate to="/user" />
        }


        return (
            <React.Fragment>
                <form className="form signin-form" action="" onSubmit={this.submitForm}>
                    <h2 className="text-center font-bold text-3xl">SIGN IN</h2>
                    <input id="email" type="text" name="email" placeholder="Email"  />
                    <input id="password" type="password" name="password" placeholder="Password"   />
                    <button className="btn btn-signin">Sign in</button>
                    <Link to="/">Not Signed up? Sign up</Link>
                </form>
            </React.Fragment>
        )
    }
}


export default Signin;

//******************************************************************* */
