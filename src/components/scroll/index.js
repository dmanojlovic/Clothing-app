import React, {useState} from "react";
import ReactDOM from "react-dom";
import items from "./Items";
import Carousel from "react-elastic-carousel";
import "./styles.css";

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  function Hscroll() {
    const [Items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
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
          <Carousel breakpoints={breakpoints}>
            {Items.map((item) => (
              <item key={item}>{item}</item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Hscroll />, rootElement);
export default Hscroll;
  