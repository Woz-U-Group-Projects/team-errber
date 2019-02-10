import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAdmin } from "../../actions/authActions";
import "./dash.css";
import logo from './logoFull.png';
import styles from './dashboard.module.css'
import {Container} from 'reactstrap';
import store from '../../store';
import ShoppingList from '../shoppinglist/ShoppingList';
import {Provider} from 'react-redux';
import ItemModal from "../itemmodal/ItemModal";
//import {Button} from 'reactstrap';

//import { Link } from "react-router-dom";


class Dashboard2 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutAdmin();
  };



  render() {
    const { admin } = this.props.auth;
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
            <div className={styles.table}>
              <div>
                Products
              </div>
             
              <Provider store={store}>
                <div style={{alignItems: "center"}}>
                  
                  
                  <Container>
                    <ItemModal/>
                    <ShoppingList />
                  </Container>
                </div>
              </Provider>
                         
            </div>
            
           
          </div>
        </div>
      
      </div>
      </div>
    );
  }
}

Dashboard2.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutAdmin }
)(Dashboard2);
