import React from "react";
// import {
//   useLocation
// }  from "react-router-dom"

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function Brand() {

// let query = useQuery();

  function myFunction() {
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var buttons = document.getElementsByClassName("radio");
    
    if ((checkBox1.checked || checkBox2.checked || checkBox3.checked) == true){
      for (let b of buttons) {
        b.style.display = "block";
      }
      
    } else {
      for (let b of buttons) {
        b.style.display = "none";
      }
    }
  }

  return (
    <div className="uniqlo">
      <div class="container">
        {/* <h2><strong><u>{query.get("name")}</u></strong>
        </h2> */}
        <div>
          <div>
            <p class = "shirts">Shirts: M</p>
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck1" onClick= {myFunction} />
          </div>
          <div>
            <p class = "shorts">Shorts: M </p> 
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck2" onClick= {myFunction} />
          </div>
          <div>
            <p class = "pants">Pants: M</p>
            <label for="myCheck">Checkbox:</label>
            <input type="checkbox" id="myCheck3" onClick= {myFunction} />
          </div>
        
        <div class = "radio" style = {{display: "none"}}>

            <h1>Feedback on Clothing</h1>
            <label class="container">Way too big (by 3-5 inches)
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">A little too big (by 1-3 inches)
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">A little too small (by 1-3 inches)
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Way too small (by 3-5 inches)
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
        </div>
      </div>
     </div>
     </div>
  );
}

export default Brand;