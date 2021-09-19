import { render } from "@testing-library/react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Social, Company, Login, Brand, Header} from "./components";
import { ReactDOM } from "react";
import CompanyName from "./components/CompanyName.js";
import "./index.css";
import './global.js';


function App() {
  return (
    <div className="App">
  
      <Router>
        
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/social" exact component={() => <Social />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/company" exact component={() => <Company />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/brand" exact component={() => <Brand />} />
        </Switch>       
        
      </Router>
    </div>
  );
}

export default App;