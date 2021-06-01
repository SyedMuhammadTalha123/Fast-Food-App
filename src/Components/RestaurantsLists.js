import React, { Component } from "react";
import {
  NavItem,
  Table,
  InputGroup,
  Input,
  Col,
  Row,
  Button,
} from "reactstrap";
import { getResturants } from "../Api";
import Loader from "../Loader";
import Slider from "./Slider";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Reastrauntcreate from "./Reastrauntcreate";

class RestaurantsLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      fullList: null,
      isLoading: true,
      searchValue: "",
      modal: false,
    };
  }

  fetchResturant = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      getResturants()
        .then(({ data }) => {
          this.setState({ list: data, fullList: data, isLoading: false });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };

  componentDidMount() {
    this.fetchResturant();
  }

  delete = (id) => {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        alert("Record has been deleted");
        this.fetchResturant();
      });
    });
  };

  CustomTable = ({ data }) => {
    return (
      <div className="Container"style={{display:"flex",flexDirection:"column"}}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <table className="table table-bordered">
              <thead style={{backgroundColor:"orange",border:"1px solid black"}}>
                <tr>
                  <th className="success"style={{backgroundColor:"orange",border:"1px solid black"}}>
                  
                    <strong>Id</strong>
                  </th>
                  <th className="success">Name</th>
                  <th className="success">Rating</th>
                  <th className="success">Email</th>
                  <th className="success">Address</th>
                  <th className="success">Operations</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="table-custom col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <table className="table table-bordered">
              <tbody>
                {data &&
                  data.map((e) => (
                    <tr style={{color:"white"}}>
                      <th scope="row">{e.id}</th>
                      <td >{e.name}</td>
                      <td >{e.rating}</td>
                      <td >{e.email}</td>
                      <td >{e.address}</td>
                      <td>
                        <Link
                          to={"/update/" + e.id}
                          style={{
                            color: "white",
                            textDecoration: "none",
                            marginRight: "20px",
                          }}
                        >
                          <img src="./edit.png" width="20px" height="20px" />
                        </Link>
                        <img
                          src="./images.png"
                          width="20px"
                          height="20px"
                          onClick={() => this.delete(e.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  /*add = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  */
  handleSearch = () => {
    console.log(this.state.searchValue);
    const sourceData = this.state.fullList;
    let tableData;
    if (this.state.searchValue === "") {
      tableData = sourceData;
    } else {
      tableData = sourceData.filter((e) => {
        if (e.name.toUpperCase() === this.state.searchValue.toUpperCase() || e.email.toUpperCase() === this.state.searchValue.toUpperCase()) {
          return e;
        }
      });
    }
    this.setState({
      list: tableData,
    });
  };
  handleClose = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.fetchResturant();
  };

  render() {
    return (
      <div className="Container"style={{backgroundColor:"black"}}>
        <NavBar />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <br />
            
            <h1 className="mt-5 pt-5 mb-5 "style={{color:"orange"}}>Restaurants Lists</h1>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
              <div className="col-sm-4 col-md-4 col-lg-4 offset-lg-4 col-xs-4">
                <InputGroup>
                  <Input
                    placeholder="Search"
                   
                    type="text"
                    onChange={(event) => {
                      this.setState({ searchValue: event.target.value });
                      setInterval(() => {
                        this.handleSearch();
                      }, 2000);
                    }}
                  />
                  <button style={{backgroundColor:"orange",border:"1px solid black"}}
                    className="btn btn-primary mb-5"
                   
                    onClick={this.handleSearch}
                  >
                    Search
                  </button>
                </InputGroup>
                <br />
              </div>
            </div>

            <h4>
              <this.CustomTable data={this.state.list} />
            </h4>
            < button
               className="btn btn-primary p-3 mb-5 mt-5" style={{backgroundColor:"orange",border:"1px solid black"}}
              onClick={this.add}
            >
              ADD RESTRAUNT
            </button>
            {this.state.modal && (
              <div className="modal-custom col-sm-12 col-md-12 col-lg-12 ">
                <Reastrauntcreate onClose={this.handleClose} />
              </div>
            )}
            <br />
            <Footer />
          </>
        )}
      </div>
    );
  }
}
export default RestaurantsLists;
