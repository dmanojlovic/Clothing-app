import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class = "h3-header" id = "fav">
          <h3><strong><u>Favorites</u></strong>
          </h3>
          </div>
           <div class="row align-items-center my-5">
          <div class="company">
            <a href = "./Uniqlo"><img
              class = "company_pictures"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
              alt=""
            /></a>
            <label>Uniqlo
              </label>
          </div>
          <div class = "company">
            <img
              class = "company_pictures"
              id="levis_pic"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Levis-logo-quer.svg"
              alt=""
            >
            </img>
            <label>Levi's
              </label>
          </div>
          <div class ="h3-header" id = "nearby" > <br> </br>
          <h3><strong><u>Nearby Stores</u></strong>
          </h3>
          <div>
          </div>
          <div class = "company">
              <img 
              class = "company_pictures" 
              id = "HnM"
              src = "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" 
              alt="">

              </img>
              <label>H&amp;M (1 mile from your location)
              </label>
          </div>
          <div class = "company">
              <img 
              class = "company_pictures"
              id = "Adidas" 
              src = "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
              alt="">
              </img>
              <label>Adidas (2 miles from your location)
              </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;