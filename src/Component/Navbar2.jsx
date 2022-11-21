import React from 'react'
// import { useRef } from "react";
//import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";


const Navbar2 = () => {
 
  return (
    <header>
			<nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      
              <img className="logo" src={"./Godrej.png"} height="120px" alt="logo"></img>
            
      <ul>
        <li><Link to="/" >
                    Home
                  </Link></li>
        <li><Link to="/emp">
                    EmpDetails
                  </Link></li>
        <li> <Link to="/Dept">
                    DeptDetails
                  </Link></li>
                  <li><Link to="/register">
                    Register
                  </Link></li>
        <li> <Link to="/DeptRegister">
                    DeptRegister
                  </Link></li>
        
                  
      </ul>

    </nav>
		</header>
  )
}

export default Navbar2