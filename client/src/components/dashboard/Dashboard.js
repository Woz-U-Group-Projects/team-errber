import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dash.css";
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
      backgroundImage: 'url(  https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2171719.jpg )',
      backgroundSize: "cover"
    };
    const divStyle1 = {
      backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSVsnrZoC7mfY01G4MxgTCozHXVzmZhsHplLo9FwzSw9gCTCp ) ',
      backgroundSize: "cover",
      padding: "none",
      fontSize: "35px"
      

    }

    return (
      <div style={divStyle}>
        
           <header type="container" style={divStyle1}>
             Errber<span style={{fontSize: "18px"}}>client: {user.name.split(" ")[0]}</span>
            
            <button            
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3  right"
            >
              Logout
            </button>
            
                          
            </header>            
        
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        
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
