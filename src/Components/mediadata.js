import { React, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../Actions/Action";

import Reservations from "./Reservations";

const Mediadata = ({ data }) => {
  const { img, head, para, price } = data;
  const [show, setShow] = useState(false);
  // const { media } = useSelector((state) => state.media);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch();
  useEffect(() => {
    //  dispatch(getAllPizza());
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 mt-5 column">
          <div className="gallery ">
            <a target="_blank" onClick={handleShow}>
              <img src={img} alt="" align="left" width="500" height="400" />
            </a>

            <h2 className="para">{para}</h2>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header
                closeButton
                style={{ backgroundColor: "black", color: "white" }}
              >
                <Modal.Title className="ml-5 pl-5" style={{ color: "white" }}>
                  <h2>{para}</h2>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "black" }}>
                <img
                  src={img}
                  alt=""
                  width="300"
                  height="200"
                  className="ml-lg-5 "
                />
                <div
                  className="desc"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    backgroundColor: "black",
                  }}
                >
                  {head}
                </div>

                <label style={{ color: "white" }}>Meal</label>
                <select
                  className="form-control"
                  style={{ backgroundColor: "black", color: "white" }}
                  name="Drinks"
                >
                  <option value="Burgeronly">Burger only</option>
                  <option value="Combo">Combo(with fries and drink)</option>
                </select>
                <br />
                <label style={{ color: "white" }}>Drinks</label>
                <select
                  className="form-control"
                  style={{ backgroundColor: "black", color: "white" }}
                  name="Drinks"
                >
                  <option value="Pepsi">Pepsi</option>
                  <option value="Coke">Coke</option>
                  <option value="Dew">Dew</option>
                  <option value="Fanta">Fanta</option>
                </select>
                <div className="row">
                  <div className="col-sm-6 col-lg-6 ">
                    <label>Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ backgroundColor: "black", color: "white" }}
                    ></input>{" "}
                  </div>
                  <div className="col-sm-6 col-lg-2 ">
                    <label>Price</label>
                    <button
                      className="btn btn-secondary mb-3"
                      style={{ fontSize: "15px", float: "right" }}
                    >
                      {price}
                    </button>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer style={{ backgroundColor: "black" }}>
                <Button
                  style={{
                    backgroundColor: "#800000",
                    border: "1px solid black",
                    borderRadius: "30px",
                    fontSize: "18px",
                  }}
                  variant="secondary"
                  onClick={handleClose}
                >
                  <b>Close</b>
                </Button>

                <Reservations />
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mediadata;
