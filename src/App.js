import { render } from "@testing-library/react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Social, Company, Login} from "./components";
import { ReactDOM } from "react";
import CompanyName from "./components/CompanyName";
import "./index.css";

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
          //<Route path="/login" exact component={() => <Login />} />
        </Switch>       
        {/* <CompanyName text="Size Matcher" /> */}
            
        <Footer />
      </Router>
    </div>
  );
}

export default App;