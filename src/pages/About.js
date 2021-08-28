import React from "react";
import "../styles/About.css";
import aman from "../assets/aman.jpg"
import aditya from "../assets/adi.jpg";
import kshitij from "../assets/kshitiz.jpg"
function About() {
  return (
<section className="team-section">
     <div className="container">
         <div className="row">
             <div className="section-title">
                 <h1>Our Team</h1>
                 <p>TRIO_KNIGHTS</p>
             </div>
         </div>
         <div className="row">
             <div className="team-items">
                  <div className="item">
                      <img src={aditya} alt="team" />
                      <div className="inner">
                          <div className="info">
                               <h5>Aditya Kumar</h5>
                               <p>WEB AND BLOCKCHAIN DEVELOPER</p>
                               <div className="social-links">
                                   <a href="n"><span className="fa fa-facebook"></span></a>
                                   <a href="n"><span className="fa fa-twitter"></span></a>
                                   <a href="n"><span className="fa fa-linkedin"></span></a>
                                   <a href="n"><span className="fa fa-youtube"></span></a>
                               </div>
                          </div>
                      </div>
                  </div>
                  <div className="item">
                      <img src={aman} alt="team" />
                      <div className="inner">
                          <div className="info">
                               <h5>AMANDEEP SINGH</h5>
                               <p>MERN STACK WEB DEVELOPER AND KOTLIN APP DEVELOPER</p>
                               <div className="social-links">
                                   <a href="n"><span className="fa fa-facebook"></span></a>
                                   <a href="n"><span className="fa fa-twitter"></span></a>
                                   <a href="n"><span className="fa fa-linkedin"></span></a>
                                   <a href="n"><span className="fa fa-youtube"></span></a>
                               </div>
                          </div>
                      </div>
                  </div>
                  <div className="item">
                      <img src={kshitij} alt="team" />
                      <div className="inner">
                          <div className="info">
                               <h5>KSHITIJ SINGH</h5>
                               <p>GRAPHIC DESIGNER AND FRONT-END WEB DEVELOPER</p>
                               <div className="social-links">
                                   <a href="n"><span className="fa fa-facebook"></span></a>
                                   <a href="n"><span className="fa fa-twitter"></span></a>
                                   <a href=","><span className="fa fa-linkedin"></span></a>
                                   <a href="m"><span className="fa fa-youtube"></span></a>
                               </div>
                          </div>
                      </div>
                  </div>
             </div>
         </div>
     </div>
  </section>
       
  );
}

export default About;
