import { render } from "@testing-library/react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Social, Company, Login, Uniqlo} from "./components";
import { ReactDOM } from "react";
import CompanyName from "./components/CompanyName";
import "./index.css";
import { Header } from './components/header';
import from './global.js';


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
          <Route path="/uniqlostore" exact component={() => <Uniqlo />} />
        </Switch>       
        <Header />
            
        <Footer />
      </Router>
    </div>
  );
}

export default App;