import React from "react";
//import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
const Home = () => {
  return (
    <header>
      <Navbar />
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1>WELCOME TO GODREJ</h1>
            <img src={"./home.jpg"} class="d-block " alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={"./home1.jpg"} class="d-block" alt="..."></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default Home;
