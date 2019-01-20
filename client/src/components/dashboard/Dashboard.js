import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dash.css";
import logo from './logoFull.png';

//import { Link } from "react-router-dom";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const divStyle = {
      color: "#B2F302",
      backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/smokey-background.jpg)',
      backgroundSize: "cover"
    };
    const divStyle1 = {
      padding: "none",
      fontSize: "35px"
      

    }

    return (
      <div style={divStyle}>
        
           <header type="container" style={divStyle1}>
           <img src={logo} width='150px'/>  
            <span style={{fontSize: "18px"}}> {user.name.split(" ")[0]}</span>
            
            <button            
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3  right"
            >
              Logout
            </button>
            
                          
            </header>            
        
      <div style={{ height: "100vh" }} className="container valign-wrapper">
        
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <div>
                Products
              </div>
            </h4>
           
          </div>
        </div>
      
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
