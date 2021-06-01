import React, { Component } from "react";
import { postRestaurant } from "../Api";
import NavBar from "./Navbar";

class Reastrauntcreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    };
  }
  create = () => {
    let data = {
      name: this.state.name,
      email: this.state.email,
      rating: this.state.rating,
      address: this.state.address,
    };

    postRestaurant(data).then((data) => {
      alert("restraunt is added ");
      this.props.onClose();
    });
    // fetch("http://localhost:3000/restaurant", {
    //   method: "post",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // }).then((result) => {
    //   result.json().then((resp) => {
    //     alert("restraunt is added ");
    //     this.props.onClose();
    //   });
    // });
  };

  render() {
    return (
      <div className="back dark-mode">
        <h1>Restraunt create</h1>
        <div className="col-sm-7 offset-lg-2 col-md-7 col-lg-7 ">
          <input
            className="form-control"
            placeholder="Restraunt Name"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <br />
        </div>
        <div className="col-sm-7 offset-lg-2  col-md-7 col-lg-7 ">
          <input
            className="form-control"
            placeholder="Restraunt Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <br />
        </div>
        <div className="col-sm-7 offset-lg-2 col-md-7 col-lg-7 ">
          <input
            className="form-control"
            placeholder="Restraunt Ratings"
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
          />
          <br />
        </div>
        <div className="col-sm-7 offset-lg-2 col-md-7 col-lg-7 ">
          <input
            className="form-control"
            placeholder="Restraunt Address"
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
          />
          <br />
        </div>
        <div className=" mt-5 ml-5 offset-lg-2 col-lg-9  ">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.create();
            }}
          >
            Add restraunt
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.onClose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default Reastrauntcreate;
