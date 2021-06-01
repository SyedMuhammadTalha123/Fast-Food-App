import React, { Component, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import { getAboutus } from "../Api";
import Aboutusdata from "../Components/Aboutusdata";

const Aboutus = () => {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    getAboutus().then(({ data }) => {
      setApiData(data);
    });
  }, []);
  return (
    <div className="Container-fluid" style={{ display: "flex", flexDirection: "column" ,backgroundColor:"black"}}>
      <Navbar />

      <div className="row">
        <div className="col-sm-12 col-xs-12 col-lg-5 col-md-12 offset-lg-1 pt-lg-5">
          <h1 className="mt-5 pt-5 "style={{ color:"orange"}}>WELCOME TO TASTY A JOYOUS EATERY</h1>
          <p
            className="mt-5 "
            style={{ color:"white",textAlign: "justify", fontSize: "25px" }}
          >
            Since our modest beginnings in 2005 with a little space in Toronto’s
            stylish Yorkville locale, ‘Organization Name’ ‘s development has
            been enlivened with the energy to cook and serve solid,
            Indian-roused takeout food. In contrast to other Indian eateries,
            ‘Organization Name’ was made with the explicit expectation to appear
            as something else.
          </p>
        </div>
        <div className="col-sm-12 col-xs-12 col-lg-4 col-md-12 offset-lg-1 mt-5 pt-5">
          <img
            src="https://i.redd.it/d2dfnfmpkno41.jpg"
            className="responsive aboutimage"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 pt-lg-5 mt-5">
          <h1 style={{color:"orange"}}>WHO WE ARE</h1>

          <div className="col-sm-12 col-xs-12 col-lg-5 col-md-12 pt-lg-5 offset-lg-3 pl-lg-5 ">
            <p
              style={{textAlign: "justify", color: "white", fontSize: "25px" }}
            >
              Our outlets is on feet to become one of the trusted and tastier
              destination in pakistan for all types of fast food, cakes, pizzas
            </p>
            <p
              style={{ textAlign: "justify", color: "white", fontSize: "25px" }}
            >
              Our standards of cofectionery and bakery are comparable with
              international standards of manufacturing. We adopt all the methods
              levels to learn and be inspired to improve our standards in
              quality and product range .Our vision is to create a market of
              happy customer and happy seller.{" "}
            </p>
          </div>
        </div>
      
      </div>
      <div className="row pl-lg-5 ml-lg-5 mt-lg-5">
          {apidata &&
            apidata.map((e, i) => (
              <Aboutusdata key={i + Math.random()} data={e} index={i} />
            ))}
          ;
        </div>
      <Footer />
    </div>
  );
};
export default Aboutus;
