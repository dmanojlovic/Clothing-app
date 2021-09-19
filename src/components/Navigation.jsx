import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import Header from './header';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">        
          {/* <text style={{fontSize: 50,}} className= "companyname" />
            Size Matcher */}
          <div>
          <Header />
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Store
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  Input Size
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/social" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/social">
                  Social
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/company" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/company">
                  About Us
                </Link>
              </li>
            </ul>
          </div>  
          

        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);