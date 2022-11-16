import React from "react";
import { Link, Outlet } from "react-router-dom";

const Details = () => {
  return (
    <header>
      <h2>Welcome Yogita Pandey</h2>
      <section>
        <div className="container">
          <div className="card">
            <div class="card-body">
              <div className="row">
                <div class="left_view">
                  <div class="profile">
                    <img src={"../profile.jpg"} alt="..."></img>
                  </div>
                  <h4>Name: Yogita Pandey</h4>
                  <h4>Age: 22</h4>
                  <p>
                    Email Id: <span> yogitapandey1423@gmail.com</span>
                  </p>
                  <p>
                    Occupation: <span> Cloud Developer</span>
                  </p>
                </div>

                <div class="right_view">
                  <p>
                    Mobile: <span> 9867089833</span>
                  </p>
                  <p>
                    Description:{" "}
                    <span>
                      {" "}
                      The purpose of lorem ipsum is to create a natural looking
                      block of text (sentence, paragraph, page, etc.) that
                      doesn't distract from the layout. A practice not without
                      controversy, laying out pages with meaningless filler text
                      can be very useful when the focus is meant to be on
                      design, not content. The passage experienced a surge in
                      popularity during the 1960s when Letraset used it on their
                      dry-transfer sheets, and again during the 90s as desktop
                      publishers bundled the text with their software.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Details;
