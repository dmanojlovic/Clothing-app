<<<<<<< HEAD
import { render } from "@testing-library/react";
import React, { useState } from "react";

function App() {
  return (
    <Dropdown>
      <DropItem icon="Settings"/>
      <DropItem icon="Profile"/>
      <DropItem icon="Friends"/>
      <DropItem icon="Stores"/>

      <DropItem icon="+">
        <DropdownMenu />
      </DropItem>


    </Dropdown> 
  )
}
function Dropdown(props){
  return(
    <nav className="dropdown">
      <ul className="dropdown-nav">{props.children }</ul>
    </nav>
  )
}
function DropItem(props){
  const [open, setOpen] = useState(false);

  return(
  <li className="drop-item">
    <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
      {props.icon}
    </a>

    {open && props.children}
  </li>
  )
}
function DropdownMenu(){
  function DropdownItem(props){
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
       
        {props.children}
        
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    )
  }
  return(
    <div className="dropdownmenu">
      <DropdownItem> My Profile </DropdownItem>
      <DropdownItem>
          
      </DropdownItem>
    </div>
  )
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
>>>>>>> origin/multiple-pages-branch
}

export default App;