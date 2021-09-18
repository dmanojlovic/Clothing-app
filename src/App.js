import { render } from "@testing-library/react";
import React from "react";

function App() {
  return (
    <Dropdown>
      <DropItem icon="0_0"/>
      <DropItem icon="0o0"/>
      <DropItem icon="0+0"/>
    </Dropdown>
    
  )
}
function Dropdown(props){
}
function DropItem(props){
  <li className="drop-item">
    <a href="#" className="icon-button">
      {props.icon}
    </a>
  </li>
}

export default App;