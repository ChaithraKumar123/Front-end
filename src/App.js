import React from "react";
import Main from "./components/Main";
import auth from "../src/components/auth.js";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';


enableRipple(true);

class App extends Component {
  state = { loginstat: false ,
    // items : [{ text: 'Logout'}]
    items : [
      {
         // iconCss: 'e-cart-icon e-link',
          text: 'Logout',
      }
  ]
  
  };

  logout = () => {

    this.setState({
      loginstat: false
    })

    localStorage.removeItem("login");
    localStorage.removeItem("WorkFlowId");
    localStorage.removeItem("confToken");
    localStorage.removeItem("isAuth");


    auth.logout(() => {
      this.props.history.push("/");
    });


  };

  switchFunc=()=> {
    this.setState({
      loginstat : true
    })
  }

  here = (e) =>{

    //e.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    // if (e.element.innerText === 'Logout'){
    //   this.logout()
    // }

    if (e.item.text === 'Logout') {
      this.logout();
  }
  }

  render() {
    var loginstat = localStorage.getItem("login");
    return (
      <div>
        <div>
          <a href="/">
            <img
              style={{ marginTop: "10px" }}
              src={require("../src/components/WHAlogo.png")}
              alt=""
              height="59.07px"
              width="200px"
            />
          </a>
          {this.state.loginstat || loginstat ? (
            <DropDownButtonComponent style={{ float: "right", 	"margin-top": "26px","margin-right": "17px" }} items={this.state.items} select = {this.here} iconCss='e-icons e-image' cssClass='e-caret-hide corner'/>
            // {/* <button
            //   className="logout"
            //   style={{ float: "right" }}
            //   onClick={this.logout}
            // >
            //   Logout
            // </button> */}

          ) : null}
        </div>

        <hr style={{ "border-top": "1px solid #C4C4C4;" }}></hr>

        <Main state = {this.state} switchFunc = {this.switchFunc} />
      </div>
    );
  }
}

export default withRouter(App);
