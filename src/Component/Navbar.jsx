import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="Nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div className="logo">
              <img src={"./Godrej.png"} height="100" alt="logo"></img>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link to="/" className="btn">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="#">ABOUT</a> */}
                  <Link to="/about" className="btn">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href="#">EMP DETAILS</a> */}
                  <Link to="/emp" className="btn">
                    Emp Details
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Dept" className="btn">
                    Dept
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/DeptRegister" className="btn">
                    DeptRegister
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/register" className="btn">
                    Register
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        </div>
      
      </header>
    );
  }
}
export default Navbar;
