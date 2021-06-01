import React, { useState } from "react";
import { Link } from "react-router-dom";
import {NavDropdown,Nav,Navbar} from 'react-bootstrap'

import { connect } from "react-redux";
import { Increment, Decrement } from "../Actions/Action";
const mapStateToProps = (props) => {
  return {
    inc: props.Increment,
    dec: props.Decrement,
  };
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // const [isOpen, setIsOpen] = useState(false);
  }

  //toggle = () => setIsOpen(!isOpen);
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (      
      <div>
         <Navbar collapseOnSelect fixed="top"expand="lg" variant="dark" style={{ backgroundColor: "black" }}>
          <Navbar.Brand href="/">
          <img
              src="../fast-food--removebg-preview.png"
              className="ml-lg-3"
              width="170px"
              height="100px"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Home"><h4 className="manage pt-lg-2 ml-lg-5">Home</h4></Nav.Link>
              <Nav.Link href="list"><h4 className="manage pt-lg-2 ml-lg-5">Restraunts List</h4></Nav.Link>
              <Nav.Link href="/aboutus"><h4 className="manage pt-lg-2 ml-lg-5">Aboutus</h4></Nav.Link>
              <Nav.Link href="/details"><h4 className="manage pt-lg-2 ml-lg-5">Menu</h4></Nav.Link>
              <Nav.Link href="/Reservations"><h4 className="manage pt-lg-2 ml-lg-5">Reservations</h4></Nav.Link>
             
              
             
              <Nav.Link href="#">
              <button
                    className="btn btn-light ml-lg-5 "
                    style={{ backgroundColor: "orange" }}
                  >
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        backgroundColor: "orange",
                      }}
                    >
                      <b>Login</b>
                    </Link>
                  </button>
              </Nav.Link>
              <Nav.Link href="/Add">
              <a className="notification">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
                      width="10%"
                    />
                    <span className="badge">{this.props.inc}</span>
                    
                    
                  </a>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NavBar) ;
