import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> COVID-19 </h1>
        <h2> Are You Ready To Fight With This Pandemic? </h2>
        <Link to="/menu">
          <button> Starts Now </button>
        </Link>
      </div>
    </div>  
  );
}

export default Home;
