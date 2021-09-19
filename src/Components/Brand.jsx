import React from "react";

function Brand() {
  
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return (
    <div className="uniqlo">
      <div class="container">
        <h2><strong><u>Uniqlo</u></strong>
        </h2>
        <div>
          <div>
            <p class = "shirts">Shirts: M</p>
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck" onClick= {myFunction} />
          </div>
          <div>
            <p class = "shorts">Shorts: M </p> 
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck" onClick= {myFunction} />
          </div>
          <div>
            <p class = "pants">Pants: M</p>
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck" onClick= {myFunction} />
          </div>
        <div>
            <p id="text" style={{display:"none"}}>Checkbox is CHECKED!</p>
        </div>
      </div>
     </div>
     </div>
  );
}

export default Brand;