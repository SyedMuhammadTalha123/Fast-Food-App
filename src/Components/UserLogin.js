import React from "react";
import ReactDOM from "react-dom";
import { Button, Form, FormText } from "react-bootstrap";
import Home from "./Home";
import "../index.css";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }
  submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login").then((data) => {
      data.json().then((resp) => {
        if (resp.length > 0) {
          const { name, password } = this.state;
          const { apiName, apiPassword } = resp[0];

          if (name === apiName && password === apiPassword) {
            window.location = "/Home";
          } else {
            this.setState({ name: "", password: "" });
            alert("Username and Password are incorect");
          }
        }
      });
    });
  };

  render() {
    return (
      <div className="Contianer-fluid text-center background">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 mt-5 pt-5">
            
            <Form>
              <div className="col-sm-12 col-lg-4 offset-lg-1 mt-5 pt-5">
              <h1 style={{ color: "white" }}>User Login</h1>
                <Form.Group>
                  <Form.Label className="mt-5 pt-5" style={{ color: "white", fontSize: "20px" }}>
                    User Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="user"
                    placeholder="User Name"
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                    value={this.state.name}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                  {this.state.uservalue}
                </Form.Group>
              </div>

              <div className="col-sm-12 col-lg-4 offset-lg-1 mt-5 pt-5">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ color: "white", fontSize: "20px" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                    value={this.state.password}
                  />
                  {this.state.userpassword}
                </Form.Group>

                <Button variant="primary" onClick={this.submit} type="submit"style={{backgroundColor:"orange",border:"1px solid grey"}}>
                  <h4 >Submit</h4>{" "}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
