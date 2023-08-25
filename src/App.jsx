import React from 'react'
import { Route, Routes } from "react-router-dom";

// Bootstrap file imported Here
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SideNav from '../src/Components/SideNavbar/SideNavbar'
// import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'
import DashboardHome from './Components/DashboardHome/DashboardHome';
import DarkMode from './Components/DarkMode/DarkMode';

function App() {

  return (
    <div>
     <div className="row w-100 ForBg">
        <div className="col-2"> <SideNav /></div>
        <div className="col-8" ><DashboardHome /></div> 
      </div>

   </div>
  )
}

export default App
