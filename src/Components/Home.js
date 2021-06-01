import React, { Component, useState, useEffect } from "react";
import { getHomepageData, getmedia } from "../Api";
import Slider from "../Components/Slider";
import Footer from "./Footer";
import MarketingBlock from "./marketingBlock";
import Mediadata from "./mediadata";
import NavBar from "./Navbar";
import UserLogin from "./UserLogin";
import $ from "jquery";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [mediaData, setData] = useState([]);
  useEffect(() => {
    getHomepageData().then(({ data }) => {
      setApiData(data);
    });
    getmedia().then(({ data }) => {
      setData(data);
    });
  }, []);
  
  return (
    <div>
      <NavBar />
      <Slider />
      <div
        className="Container-fluid "
        style={{ display: "flex", flexDirection: "column",backgroundColor:"black" }}
      >
        {apiData &&
          apiData.map((e, i) => (
            <MarketingBlock key={i + Math.random()} data={e} index={i} />
          ))}

        <div className="row">
          <div className="offset-lg-1 col-sm-12 mt-5 col-lg-4 pt-5">
            <img
              src="https://static.wixstatic.com/media/83b956_e8839aafce704d5bb47187fdb69058e6~mv2.jpg/v1/fill/w_734,h_734,al_c,q_85,usm_0.66_1.00_0.01/83b956_e8839aafce704d5bb47187fdb69058e6~mv2.webp"
              width="100%"
              height="100%"
              alt="Responsive image"
            />
          </div>
          <div className="offset-lg-1 col-sm-12 col-lg-4">
            <h1 className=" mt-5 pt-5 pb-5"style={{color: "orange"}}>
              <b>Features</b>
            </h1>

            <p
              style={{ fontSize: "22px", textAlign: "justify", color: "white",fontFamily:"Arial, Helvetica, sans-serif" }}
            >
              <ul>
                <li>Easy and user-friendly dashboard.</li>
                <li>ECode referral System.</li>
                <li>Customers engagement with push notifications.</li>
                <li>Social media Integration. </li>
                <li>Cross platform compatibility Benefits. </li>
                <li>
                  Orders are ‘right’ all the time Keeps the costs transparent.
                </li>
                <li>Reduces human error.</li>
                <li>
                  {" "}
                  Monitors your expenses in real time Customers tracking and
                  loyalty.
                </li>
                <li>Mobile friendly.</li>
                <li>
                  {" "}
                  Offers Home Delivery, Restaurant booking, Party booking,
                  Weeding booking, Food festivals, Recipes, Live Bar B Q, Home
                  events, Book a Chef for special events, Catering services.
                </li>
              </ul>
            </p>
          </div>
        </div>
        
      </div>
     
      
      <Footer />
    </div>
  );
};
export default Home;
