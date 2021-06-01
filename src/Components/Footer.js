import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className=" col-xs-12"
      >
        <div
          class="jumbotron text-center"
          style={{ color: "white", backgroundColor: "black" }}
        >
          <h1 style={{ color: "white" }}> Our Services</h1>
          <p></p>
        </div>

        <div className="container ">
          <div class="row">
            <div class="col-sm-4">
              <h3>Follow us </h3>
              <a href="https://www.facebook.com/syedtalhaayub">
                <img
                  src="./facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art-removebg-preview.png"
                  width="105px"
                />
              </a>
              <a href="https://instagram.com/syedtalhaayub?utm_medium=copy_link">
                <img src="./instagram-removebg-preview.png" width="60px" />
              </a>
              <a href="https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6">
                <img
                  src="./WhatsApp_Logo_1-removebg-preview.png"
                  width="125px"
                />
              </a>

              <p>Fast Food Sites provides online food ordering and delivery
                solutions to Takeaway, Fast Food and restaurants. Fast Food
                Sites is owned and operated by Informsit Ltd.</p>
              
            </div>
            <div class="col-sm-4">
              <h3>Contact us</h3>
              <input type="text" className="form-control" placeholder="Email" />
              <br />
              <input type="text" className="form-control" placeholder="Name" /><br/>
              <p>
              online payment and food delivery function
              </p>
             
            </div>
            <div class="col-sm-4">
              <h3>About us</h3>
              <p style={{ textAlign: "center", justifyContent: "center" }}>
                Welcome to Fast Food Sites, the home of the websites for Take
                away, Fast Food and Restaurants. With the increased interests in
                the online food ordering and delivery, and the rapid grow in the
                takeaway market, having a fully functional website to offer
                online take away ordering, payment and delivery is a necessity
                for any retailer in this fast changing sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
