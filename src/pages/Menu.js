import React from "react";
import "../styles/Menu.css";
import speaker1 from "../assets/donate.png";
import speaker2 from "../assets/social.jpg";

import speaker3 from "../assets/mask.png";
import speaker4 from "../assets/covid.jpg";
import speaker15 from "../assets/food.jpg";
import speaker35 from "../assets/vaccine2.png";
function Menu() {
  return (
    <div className="container-fluid cf pt-5 pb-5">
        <div className="container con mx-auto col-md-10">
          <div className="header">
            <div className="section-header">
              <h2>Our Missions</h2>
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker3} alt="" className="img-fluid" />{" "}
                  </div>
                 
                  <div className="card-title mt-4">
                  <a href="https://github.com/amandeep2326">
                    Face Mask Detection
                    </a>
                    </div>
                 
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Detect presence of mask in the group of people
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker2} alt="" className="img-fluid" />{" "}
                  </div>
                  <div className="card-title mt-4">
                  <a href="https://amandeep2326.github.io/Hackathon-Social-distancing-UI/">
                    Social Distancing Detection UI
                    </a>
                  </div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Maintains Social Distancing in the public and alert the system If someone Breaks it.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker1} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"><a href="https://facvassorg.netlify.app/">Donation</a></div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Donate to the Real Verified Covid Relief Funds.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker4} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"><a href = "https://covid-19-live-amandeep.herokuapp.com/">Covid Live Reports</a></div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Check Out the live status of Covid-19 Cases in India.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker35} alt="" />{" "}
                  </div>
                  <div className="card-title mt-4">Vaccines</div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Vaccine Slots 
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src="#"alt="" />{" "}
                  </div>
                  <div className="card-title mt-4"><a href = "https://chatting-app-amandeep.herokuapp.com/">Chat BOT</a></div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Chat System
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          
            <div className="card col-md-3 mt-4">
              <div className="card-content">
                <div className="card-body p-0">
                  <div className="profile">
                    {" "}
                    <img src={speaker15} alt="" className="img-fluid" />{" "}
                  </div>
                  <div className="card-title mt-4"><a href = "https://amandeep2326.github.io/food-supply/">Food Supply</a></div>
                  <div className="card-subtitle">
                    <p>
                      {" "}
                      <small className="text-muted">
                        {" "}
                        Supply Food to the needy and isolated victim of COVID-19.
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Menu;
