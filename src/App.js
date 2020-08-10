import React from "react";
import Main from "./components/Main";
import auth from "../src/components/auth.js";
import { Component } from "react";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";



class App extends Component {
  logout = () => {
    auth.logout(() => {
      this.props.history.push("/");
    });
  
    localStorage.removeItem("login");
    localStorage.removeItem("WorkFlowId")

  };

  render()
  {
    var loginstat = localStorage.getItem('login')
    return (
      <div>
        <div>
        <a href="/">
        <img src={require("../src/components/WHAlogo.png")} height="59.07px" width = "200px" />
        </a>
        {loginstat?
        <button className="logout"
                  style = {{"float": "right"}}
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                  :null
  }
        </div>
  
        <hr style = {{"border-top": "1px solid #C4C4C4;"}}></hr>
  
  
  
        <Main />
      </div>
    );
  }
 
}


export default withRouter(App);
