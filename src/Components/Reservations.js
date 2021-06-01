import React, { Component } from "react";
import Navbar from "./Navbar";
import { postReservations } from "../Api";
import { Button, Form, FormText } from "react-bootstrap";
import FormikReservations from "./FormikReservations";
import { Increment, Decrement } from "../Actions/Action";
import { connect } from "react-redux";
const mapStateToProps = (props) => {
  return {
    inc: props.Increment,
    dec: props.Decrement,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Increment()),
    decrement: () => dispatch(Decrement()),
  };
};

class Reservations extends Component {
  constructor(props) {
    super(props);
  }
  handleAddToCart = () => {
    this.props.increment();
    window.alert("Saved");
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          style={{
            backgroundColor: "#800000",
            border: "1px solid black",
            borderRadius: "30px",
            fontSize: "18px",
          }}
          onClick={this.handleAddToCart}
        >
          <b>Add to cart</b>
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
