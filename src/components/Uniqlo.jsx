import React from "react";

function Uniqlo() {
  
  return (
    <div className="uniqlo">
      <div class="container">
        <div class="row align-items-center my-5">
          <label class = "shirts">Shirts: 
          </label>
            <select>
              <option>Waist Width</option>
              <option>Chest Width</option>
              <option>Arm Length</option>
            </select>
          <label class = "shorts">Shorts:
          </label>
          <label class = "pants">Pants:
          </label>
        </div>
      </div>
    </div>
  );
}

export default Uniqlo;