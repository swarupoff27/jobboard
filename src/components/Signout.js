import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Signout.css'


export default class Signout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }
  render() {
    return (
      <div className="signout-wrapper">
        <h2>Signed out successfully! <Link to="/signin">SIGN IN AGAIN</Link></h2>
      </div>
    )
  }
}
