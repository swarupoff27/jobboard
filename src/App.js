import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Postajob from './components/Postajob'
import Joblisting from './components/Joblisting'
import Viewjob from './components/Viewjob'
import User from './components/User'
import Signout from './components/Signout'

import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* <nav>
          <div><h1 className="">JOB BOARD</h1></div>
          <div></div>
        </nav> */}
        <div className="container">
          {/* <div className="illustration flex-1 flex items-center justify-center flex-col h-screen bg-blue">
            <h1 className="font-bold text-3xl absolute text-white top-10">JOB BOARD</h1>
            <img className="mt-24" src='https://svgshare.com/i/nKN.svg' title='illustration'  width="70%" height="70%"/>
          </div> */}
          <div className="right-forms flex flex-col flex-1 justify-center items-center h-screen">
            <Routes className="">
              <Route path="/" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
              <Route path="user" element={<User />} />
              <Route path="postajob" element={<Postajob />} />
              <Route path="joblisting" element={<Joblisting />} />
              <Route path="viewjob" element={<Viewjob />} />
              <Route path="signout" element={<Signout />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
