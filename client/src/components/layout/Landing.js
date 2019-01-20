import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './logoFull.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
           
            <img src={logo} />
            
            <h4>
              Grass Meant For Your Finger Tips
            </h4>  

            <p className="flow-text white-text text-darken-1">
              Welcome to a delivery of peace!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
