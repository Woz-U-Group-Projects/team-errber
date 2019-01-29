import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser, logoutAdmin } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";



//import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard2 from "./components/dashboard/Dashboard2";
import LoginA from "./components/auth/LoginA";


import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
  if (decoded.exp < currentTime){
    store.dispatch(logoutAdmin());
    window.location.href = "./logina"
  }
}
class App extends Component {
  render() {
    
    const divStyle = {
      color: "#B2F302",
      backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/smokey-background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no'

    };
    const divStyle1 = {
      backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSVsnrZoC7mfY01G4MxgTCozHXVzmZhsHplLo9FwzSw9gCTCp ) ',
      padding: "none",
      fontSize: "35px" 
      

    }
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={divStyle}>
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logina" component={LoginA}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard2" component={Dashboard2} />
            </Switch>
           
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
