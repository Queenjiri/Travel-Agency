// import React from "react";

const NavBar=()=>{
    return(
      <div className="nav-container">
        <h1>Travul<span>9ja</span></h1>
        <div className="showcase">
        <a href="/">Flights</a>
        <a href="/">Hotels</a>
        <a href="/">Vehicle Services
        <option class="option-one">
            <select>Buses</select>
            <select>Taxi</select>
            <select>Luxury</select>
            </option></a>
        <a href="/">More
        <option>
            <select>Help</select>
            <select>Contact Us</select>
        </option>
        </a>

        <div className="nav-btn">
            <span className="log">Login</span>
           <button  href="./Signup"className="second-btn">Create Account</button>
        </div>
        </div>
        <div class="bar">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        
        </div>
      </div>
    )
}

export default NavBar