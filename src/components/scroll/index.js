import React, {useState} from "react";
import ReactDOM from "react-dom";

import items from "./Items";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  function Hscroll() {
    const [Items, setItems] = useState([1, 2, 3, 4]);
  
    const addItem = () => {
      const nextItem = Math.max(1, Items.length + 1);
      setItems([Items, nextItem]);
    };
  
    const removeItem = () => {
      const endRange = Math.max(0, Items.length - 1);
      setItems(Items.slice(0, endRange));
    };
    return (
      <div className="hscroll">
        <div className="controls-wrapper">
          <button onClick={removeItem}>Remove Item</button>
          <button onClick={addItem}>Add Item</button>
        </div>
        <hr className="seperator" />
        <div className="carousel-wrapper">
          <carousel breakPoints={breakPoints}>
            {Items.map((item) => (
              <item key={item}>{item}</item>
            ))}
          </carousel>
        </div>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<hscroll />, rootElement);
export default Hscroll;
  