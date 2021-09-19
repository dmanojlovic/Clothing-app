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
          <div class = "shirts">
            <p>Shirts: M</p>
            <label for="myCheck">Checkbox:</label>
            <select multiple onChange = {changeList}>
                <option value="blank"></option>
                <option value="a">Chest</option>
                <option value="b">Waist</option>
                <option value="c">Arm Length</option>
            </select>
          </div>
          <div class = "shorts">
            <p>Shorts: M </p> 
            <label for="myCheck">Checkbox:</label>
            <select multiple onChange = {changeList}>
                <option value="blank"></option>
                <option value="a">Waist Length</option>
            </select>
          </div>
          <div class = "pants">
            <p>Pants: M</p>
            <label for="myCheck">Checkbox:</label>
            <select multiple onChange = {changeList}>
                <option value="blank"></option>
                <option value="a">Waist Length</option>
                <option value="b">Leg Length</option>
            </select>
          </div>
        <div>
            <p id="text" style="display:none">Checkbox is CHECKED!</p>
        </div>
      </div>
    </div>
    </div>
     
  );
}

export default Brand;