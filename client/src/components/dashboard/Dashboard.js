import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dash.css";
import logo from './logoFull.png';

import {Container} from 'reactstrap';
import store from '../../store';
import ShoppingList from '../shoppinglist/ShoppingList';
import {Provider} from 'react-redux';
import ItemModal from "../itemmodal/ItemModal";
import styles from './dashboard.module.css';
//import {Button} from 'reactstrap';

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
      <div className={styles.try}>
          <div className={styles.header}>
           <header type="container" style={divStyle1}>
           <img src={logo} width='150px'/>  
            
            
            <button            
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3  right"
            >
              Logout
            </button>
            
                          
            </header>            
        </div>
      <div style={{ height: "100vh" }} >
        
        <div >
          <div >
            <h4>
              <div className={styles.producthead}>
                Products
              </div>
             <div></div>
              <Provider store={store} className={styles.products}>
                
                  
                  
                  <Container>     
                    <ShoppingList />
                  </Container>
                
              </Provider>
                         
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
