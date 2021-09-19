// import { render } from "@testing-library/react";
// import React, { useState } from "react";
// import { ReactComponent as Settingcog } from '../settings.svg';

// function Menu
// function App() {
//  return (
//    <Dropdown>
//      <DropItem icon={<Settingcog />}>
//        <DropdownMenu />
//      </DropItem>
//    </Dropdown>
//  )
// }
// function Dropdown(props){
//  return(
//    <nav className="dropdown">
//      <ul className="dropdown-nav">{props.children }</ul>
//    </nav>
//  )
// }
// function DropItem(props){
//  const [open, setOpen] = useState(false);

//  return(
//  <li className="drop-item">
//    <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
//      {props.icon}
//    </a>

//    {open && props.children}
//  </li>
//  )
// }
// function DropdownMenu(){
//  function DropdownItem(props){
//    return(
//      <a href="#" className="menu-item">
//        <span className="icon-button">{props.leftIcon}</span>
//        {props.children}
//        <span className="icon-right">{props.rightIcon}</span>
//      </a>
//    )
//  }
//  return(
//    <div className="dropdownmenu">
//      <DropdownItem>My Profile</DropdownItem>
//      <DropdownItem>
//          leftIcon="!0!"
//          rightIcon="0.0"
//      </DropdownItem>
//    </div>
//  )
// }

// export default App;