import React from "react";
import Footer from "../Component/Footer";
//import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Navbar2 from "../Component/Navbar2";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active card-img-overlay">
            <img src={"./home.jpg"} className="firstpg" alt="..."></img>

            <div class="card-img-overlay">
              <h2 class="card-title">WELCOME TO GODREJ</h2>
              <p class="card-text">
                Godrej Group is an Indian multinational conglomerate
                headquartered in Mumbai, which is managed and largely owned by
                the Godrej family. It was founded by Ardeshir Godrej and
                Pirojsha Burjorji Godrej in 1897, and operates in sectors
                including real estate, consumer products, industrial
                engineering, appliances, furniture, security and agricultural
                products
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={"./home1.jpg"} className="firstpg" alt="..."></img>
            <div class="card-img-overlay">
              <h2 class="card-title">ABOUT GODREJ</h2>
              <p class="card-text">
                Godrej Group is an Indian multinational conglomerate
                headquartered in Mumbai, which is managed and largely owned by
                the Godrej family. It was founded by Ardeshir Godrej and
                Pirojsha Burjorji Godrej in 1897, and operates in sectors
                including real estate, consumer products, industrial
                engineering, appliances, furniture, security and agricultural
                products
              </p>
            </div>
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

      <br />
      <div className="container" id="cardN">
        <div className="card-img col-md-6">
          <img src={"./home1.jpg"} alt="..." height={300} width={450}></img>{" "}
          <p className="col-md-6">
            {" "}
            Godrej Group is an Indian multinational conglomerate headquartered
            in Mumbai, which is managed and largely owned by the Godrej family.
            It was founded by Ardeshir Godrej and Pirojsha Burjorji Godrej in
            1897, and operates in sectors including real estate, consumer
            products, industrial engineering, appliances, furniture, security
            and agricultural products Established in 1897, the Godrej Group has
            its roots in India's Independence and Swadeshi movement. Our
            founder, Ardeshir Godrej, lawyer-turned-serial entrepreneur failed
            with a few ventures, before he struck gold with a locks
            business.Today, we enjoy the patronage of 1.1 billion consumers
            globally across consumer goods, real estate, appliances, agriculture
            and many other businesses. In fact, our geographical footprint
            extends beyond Earth, with our engines now powering many of India's
            space missions.With a revenue of over USD 4.1 billion we are growing
            fast, and have exciting, ambitious aspirations.
          </p>
        </div>
        <section>
          <p className="team">OUR TEAM</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="card-group">
            <div class="card">
              <img
                src="./Head.jpg"
                class="card-img-top"
                height={240}
                width={240}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title2">Card title</h5>
                <p class="card-text2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text2">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img src="./manager.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title2">Card title</h5>
                <p class="card-text2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-tex2t">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img src="./team.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title2">Card title</h5>
                <p class="card-text2">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text2">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
